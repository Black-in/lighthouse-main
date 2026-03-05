/*
 * Lighthouse
 * © 2026 ayushshrivastv
 */

import { Runnable, RunnableLambda, RunnableSequence } from '@langchain/core/runnables';
import { new_planner_output_schema, old_planner_output_schema } from './schema/output_schema';
import Tool from './tools/tool';
import StreamParser from '../services/stream_parser';
import { ChatRole, GenerationStatus, Message, prisma } from '@lighthouse/database';

import { Response } from 'express';
import {
    FILE_STRUCTURE_TYPES,
    PHASE_TYPES,
    StreamEvent,
    StreamEventData,
} from '../types/stream_event_types';
import { STAGE } from '../types/content_types';
import { cre_deploy_queue, objectStore } from '../services/init';
import { Chain, FileContent, MODEL } from '@lighthouse/types';
import { mergeWithLLMFiles, prepareBaseTemplate } from '../class/test';
import chalk from 'chalk';
import { finalizer_output_schema } from './schema/finalizer_output_schema';
import { new_chat_coder_prompt, new_chat_planner_prompt } from './prompts/new_chat_prompts';
import { finalizer_prompt } from './prompts/finalizer_prompt';
import { old_chat_coder_prompt, old_chat_planner_prompt } from './prompts/old_chat_prompts';
import {
    new_coder,
    new_finalizer,
    new_planner,
    old_coder,
    old_finalizer,
    old_planner,
} from './types/generator_types';
import { start_planning_context_prompt } from './prompts/planning_context_prompt';
import { plan_context_schema } from './schema/plan_context_schema';
import ResponseWriter from '../class/response_writer';
import { ChatOpenAI } from '@langchain/openai';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import env from '../configs/config.env';
import { getChainRuntime } from '../chains/registry';
import { prepareBaseMonorepoTemplate } from '../chains/base/template';
import { composeCreWorkflow } from '../chains/base/cre_adapter';
import { BaseMessage } from '@langchain/core/messages';

interface IdlPart {
    path: string;
    [key: string]: unknown;
}

interface FinalizerData {
    idl: IdlPart[];
    context: string;
}

function coerceIdlParts(value: unknown): IdlPart[] {
    if (!Array.isArray(value)) return [];
    return value.filter(
        (item): item is IdlPart =>
            typeof item === 'object' && item !== null && typeof (item as IdlPart).path === 'string',
    );
}

export default class Generator {
    protected gpt_planner: ChatOpenAI | ChatGoogleGenerativeAI;
    protected gpt_coder: ChatOpenAI | ChatGoogleGenerativeAI;
    protected openai_coder: ChatOpenAI | ChatGoogleGenerativeAI;
    protected claude_coder: ChatOpenAI | ChatGoogleGenerativeAI;
    protected gpt_finalizer: ChatOpenAI | ChatGoogleGenerativeAI;

    protected parsers: Map<string, StreamParser>;

    constructor() {
        const openRouterKey = (env.SERVER_OPENROUTER_KEY || '').trim();
        const openAiKey = (env.SERVER_OPENAI_API_KEY || '').trim();
        const openAiPrimaryModel = (env.SERVER_OPENAI_PRIMARY_MODEL || 'gpt-4o-mini').trim();
        const geminiKey = (env.SERVER_GEMINI_API_KEY || '').trim();
        const openRouterOpenAiModel = openAiPrimaryModel.includes('/')
            ? openAiPrimaryModel
            : `openai/${openAiPrimaryModel}`;

        if (openRouterKey) {
            this.gpt_planner = new ChatOpenAI({
                model: 'moonshotai/kimi-dev-72b',
                temperature: 0.2,
                streaming: false,
                configuration: {
                    baseURL: 'https://openrouter.ai/api/v1',
                    apiKey: openRouterKey,
                },
            });

            this.gpt_coder = new ChatOpenAI({
                model: 'google/gemini-2.0-flash-001',
                temperature: 0.2,
                streaming: true,
                configuration: {
                    baseURL: 'https://openrouter.ai/api/v1',
                    apiKey: openRouterKey,
                },
            });

            this.openai_coder = new ChatOpenAI({
                model: openRouterOpenAiModel,
                temperature: 0.2,
                streaming: true,
                configuration: {
                    baseURL: 'https://openrouter.ai/api/v1',
                    apiKey: openRouterKey,
                },
            });

            this.claude_coder = new ChatOpenAI({
                model: 'anthropic/claude-3.7-sonnet',
                temperature: 0.2,
                streaming: true,
                configuration: {
                    baseURL: 'https://openrouter.ai/api/v1',
                    apiKey: openRouterKey,
                },
            });

            this.gpt_finalizer = new ChatOpenAI({
                model: 'openai/gpt-4o-mini',
                temperature: 0.2,
                configuration: {
                    baseURL: 'https://openrouter.ai/api/v1',
                    apiKey: openRouterKey,
                },
            });
        } else {
            const fallbackOpenAi = openAiKey
                ? new ChatOpenAI({
                      model: openAiPrimaryModel,
                      temperature: 0.2,
                      streaming: true,
                      configuration: {
                          apiKey: openAiKey,
                      },
                  })
                : null;

            const fallbackGemini = geminiKey
                ? new ChatGoogleGenerativeAI({
                      model: 'gemini-2.5-flash',
                      temperature: 0.2,
                      apiKey: geminiKey,
                  })
                : null;

            if (!fallbackOpenAi && !fallbackGemini) {
                console.warn(
                    'No LLM keys configured. Set SERVER_OPENAI_API_KEY or SERVER_GEMINI_API_KEY (or SERVER_OPENROUTER_KEY). Generation requests will fail until configured.',
                );
            }

            const finalFallbackClient =
                fallbackOpenAi ||
                fallbackGemini ||
                new ChatOpenAI({
                    model: 'gpt-4o-mini',
                    temperature: 0.2,
                    streaming: true,
                    configuration: {
                        apiKey: 'missing-key',
                    },
                });

            this.gpt_planner = fallbackOpenAi || fallbackGemini || finalFallbackClient;
            this.gpt_coder = fallbackGemini || fallbackOpenAi || finalFallbackClient;
            this.openai_coder = fallbackOpenAi || fallbackGemini || finalFallbackClient;
            this.claude_coder = fallbackOpenAi || fallbackGemini || finalFallbackClient;
            this.gpt_finalizer = fallbackOpenAi || fallbackGemini || finalFallbackClient;
        }

        this.parsers = new Map<string, StreamParser>();
    }

    private shouldEnqueueCreDeploy(): boolean {
        const hasApiKey = Boolean((env.SERVER_CRE_API_KEY || '').trim());
        return hasApiKey;
    }

    private buildFallbackFinalizerData(generated_files: FileContent[]): FinalizerData {
        const contractFiles = generated_files.filter((file) => file.path.endsWith('.sol')).length;
        const testFiles = generated_files.filter(
            (file) => file.path.endsWith('.t.sol') || file.path.endsWith('.spec.ts'),
        ).length;
        const frontendFiles = generated_files.filter((file) =>
            file.path.startsWith('apps/web/'),
        ).length;
        const keyPaths = generated_files
            .slice(0, 12)
            .map((file) => file.path)
            .join(', ');

        return {
            idl: generated_files.slice(0, 40).map((file) => ({
                path: file.path,
                type: file.path.split('.').pop() || 'file',
            })),
            context: [
                `Generated ${generated_files.length} files for a Base-native workspace.`,
                `Contracts: ${contractFiles}, tests: ${testFiles}, frontend files: ${frontendFiles}.`,
                keyPaths ? `Key files: ${keyPaths}.` : '',
            ]
                .filter(Boolean)
                .join(' '),
        };
    }

    private mapGenerationErrorMessage(rawMessage: string): string {
        const normalized = rawMessage.toLowerCase();
        if (
            normalized.includes('model_not_found') ||
            normalized.includes('does not exist or you do not have access')
        ) {
            return `OpenAI model access error. Set SERVER_OPENAI_PRIMARY_MODEL to an allowed model (current: ${
                env.SERVER_OPENAI_PRIMARY_MODEL || 'gpt-4o-mini'
            }) and restart the server.`;
        }
        return rawMessage;
    }

    private normalizeFinalizerData(value: unknown, generated_files: FileContent[]): FinalizerData {
        const fallback = this.buildFallbackFinalizerData(generated_files);
        if (!value || typeof value !== 'object') {
            return fallback;
        }

        const payload = value as { idl?: unknown; context?: unknown };
        const context =
            typeof payload.context === 'string' && payload.context.trim().length > 0
                ? payload.context
                : fallback.context;

        return {
            idl: coerceIdlParts(payload.idl),
            context,
        };
    }

    private async invokeFinalizerWithTimeout(
        finalizer_chain: {
            invoke: (input: { generated_files: FileContent[] }) => Promise<unknown>;
        },
        generated_files: FileContent[],
    ): Promise<FinalizerData> {
        const timeoutMs = 20_000;
        let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

        try {
            const result = await Promise.race([
                finalizer_chain.invoke({ generated_files }),
                new Promise<never>((_resolve, reject) => {
                    timeoutHandle = setTimeout(() => {
                        reject(
                            new Error(
                                `Finalizer timed out after ${timeoutMs}ms. Falling back to deterministic summary.`,
                            ),
                        );
                    }, timeoutMs);
                }),
            ]);

            return this.normalizeFinalizerData(result, generated_files);
        } catch (error) {
            console.error('Finalizer invoke failed; using fallback summary.', error);
            return this.buildFallbackFinalizerData(generated_files);
        } finally {
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
        }
    }

    public async generate(
        res: Response,
        chat: 'new' | 'old',
        user_instruction: string,
        model: MODEL,
        contract_id: string,
        chain: Chain = Chain.BASE,
        idl?: Object[],
    ) {
        const parser = this.get_parser(contract_id, res);
        try {
            this.create_stream(res);
            getChainRuntime(chain);

            // this check represents that chain is created without any errors
            const runtime_chains = this.get_chains(chat, model, chain);
            if (!runtime_chains) {
                throw new Error('chains not created');
            }
            const { planner_chain, coder_chain, finalizer_chain } = runtime_chains;

            // make the contract busy
            await this.update_contract_state(contract_id, GenerationStatus.GENERATING);

            switch (chat) {
                case 'new': {
                    this.new_contract(
                        res,
                        planner_chain,
                        coder_chain,
                        finalizer_chain,
                        user_instruction,
                        contract_id,
                        chain,
                        parser,
                    );
                    return;
                }
                case 'old': {
                    if (idl) {
                        this.old_contract(
                            res,
                            planner_chain,
                            coder_chain,
                            finalizer_chain,
                            user_instruction,
                            contract_id,
                            chain,
                            parser,
                            idl,
                        );
                    } else {
                        throw new Error('idl was not found');
                    }
                }
            }
        } catch (error) {
            this.handle_error(res, error, 'generate', contract_id, parser);
        }
    }

    protected async new_contract(
        res: Response,
        planner_chain: new_planner,
        coder_chain: new_coder,
        finalizer_chain: new_finalizer,
        user_instruction: string,
        contract_id: string,
        chain: Chain,
        parser: StreamParser,
    ) {
        try {
            console.log('new contract planned going to be executed ---------------');
            const planner_data = await planner_chain.invoke({
                user_instruction,
            });
            console.log(chalk.blue(planner_data));
            const full_response: string = '';

            console.log(planner_data);
            const cre_workflow = composeCreWorkflow(user_instruction);
            const chain_plan =
                chain === Chain.BASE
                    ? `${planner_data.plan}\n\nCRE Workflow (Base): ${JSON.stringify(
                          cre_workflow.steps,
                      )}`
                    : planner_data.plan;

            const llm_message = await prisma.message.create({
                data: {
                    content: planner_data.context,
                    contractId: contract_id,
                    role: ChatRole.AI,
                },
            });

            console.log('the context: ', chalk.red(planner_data.context));
            this.send_sse(res, STAGE.CONTEXT, {
                context: planner_data.context,
                llmMessage: llm_message,
            });

            if (!planner_data.should_continue) {
                console.log('planner said to not continue.');
                parser.reset();
                this.delete_parser(contract_id);
                this.update_contract_state(contract_id, GenerationStatus.IDLE);
                ResponseWriter.stream.end(res);
                return;
            }

            let { system_message } = await prisma.$transaction(async (tx) => {
                const system_message = await tx.message.create({
                    data: {
                        contractId: contract_id,
                        role: ChatRole.SYSTEM,
                        content: 'starting to generate in a few seconds',
                        stage: STAGE.PLANNING,
                    },
                });
                const update_contract = await tx.contract.update({
                    where: {
                        id: contract_id,
                    },
                    data: {
                        title: planner_data.contract_name,
                        description: planner_data.context,
                    },
                });

                return {
                    system_message,
                    contract: update_contract,
                };
            });

            // send planning stage from here
            console.log('the stage: ', chalk.green('Planning'));
            this.send_sse(res, STAGE.PLANNING, { stage: 'Planning' }, system_message);

            const code_stream = await coder_chain.stream({
                plan: chain_plan,
                files_likely_affected: planner_data.files_likely_affected,
            });

            console.log(chalk.green('coder stream started ----------------'));

            let buffer = '';
            let lastFlush = Date.now();

            const MAX_DELAY = 80;
            const MAX_CHARS = 200;

            for await (const chunk of code_stream) {
                if (!chunk.text) continue;

                buffer += chunk.text;
                const now = Date.now();

                const hasNewline = buffer.includes('\n');

                const shouldFlush =
                    hasNewline || buffer.length > MAX_CHARS || now - lastFlush > MAX_DELAY;

                if (shouldFlush) {
                    const lines = buffer.split('\n');
                    const safeChunk = lines.slice(0, -1).join('\n') + '\n';

                    if (safeChunk.trim()) {
                        console.log(safeChunk);
                        parser.feed(safeChunk, system_message);
                    }

                    buffer = lines.at(-1) ?? '';
                    lastFlush = now;
                }
            }

            // send the left over to parser
            if (buffer.trim()) {
                parser.feed(buffer + '\n', system_message);
            }

            console.log(chalk.bgRed('letters length: '), full_response.length);

            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.BUILDING,
                },
            });

            console.log('the stage: ', chalk.green('Building'));
            this.send_sse(res, STAGE.BUILDING, { stage: 'Building' }, system_message);

            const llm_generated_files: FileContent[] = parser.getGeneratedFiles();
            console.log('llm generated files: ', llm_generated_files);
            const base_files: FileContent[] =
                chain === Chain.BASE
                    ? prepareBaseMonorepoTemplate(planner_data.contract_name, user_instruction)
                    : prepareBaseTemplate(planner_data.contract_name);
            const final_code: FileContent[] = mergeWithLLMFiles(base_files, llm_generated_files);

            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.CREATING_FILES,
                },
            });

            console.log('the stage: ', chalk.green('Creating Files'));
            this.send_sse(res, STAGE.CREATING_FILES, { stage: 'Creating Files' }, system_message);

            this.new_finalizer(
                res,
                finalizer_chain,
                final_code,
                full_response,
                contract_id,
                parser,
                system_message,
            );
        } catch (error) {
            this.handle_error(res, error, 'new_contract', contract_id, parser);
        }
    }

    protected async new_finalizer(
        res: Response,
        finalizer_chain: new_finalizer,
        generated_files: FileContent[],
        full_response: string,
        contract_id: string,
        parser: StreamParser,
        system_message: Message,
    ) {
        try {
            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.FINALIZING,
                },
            });

            console.log('the stage: ', chalk.green('Finalizing'));
            this.send_sse(res, STAGE.FINALIZING, { stage: 'Finalizing' }, system_message);

            const finalizer_data = await this.invokeFinalizerWithTimeout(
                finalizer_chain,
                generated_files,
            );

            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.END,
                },
            });
            console.log('the stage: ', chalk.green('END'));
            this.send_sse(res, STAGE.END, { stage: 'End', data: generated_files }, system_message);

            const llm_message = await prisma.message.create({
                data: {
                    contractId: contract_id,
                    role: ChatRole.AI,
                    content: finalizer_data.context,
                },
            });

            console.log('the context: ', chalk.red(finalizer_data.context));
            this.send_sse(
                res,
                STAGE.CONTEXT,
                { context: finalizer_data.context, llmMessage: llm_message },
                system_message,
            );

            await objectStore.uploadContractFiles(contract_id, generated_files, full_response);

            if (this.shouldEnqueueCreDeploy()) {
                void cre_deploy_queue
                    .enqueue_deploy({
                        chain: 'BASE',
                        contractId: contract_id,
                        network: 'base-sepolia',
                        createdAt: Date.now(),
                    })
                    .catch((error) => {
                        console.error('failed to enqueue cre-deploy job', error);
                    });
            } else {
                console.log(
                    'Skipping CRE deploy enqueue because SERVER_CRE_API_KEY is not configured.',
                );
            }

            // save the idl to data base
            await prisma.contract.update({
                where: {
                    id: contract_id,
                },
                data: {
                    summarisedObject: JSON.stringify(finalizer_data.idl),
                },
            });
        } catch (error) {
            console.error('Error while finalizing: ', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown finalizer error';
            try {
                system_message = await prisma.message.update({
                    where: {
                        id: system_message.id,
                        contractId: contract_id,
                    },
                    data: {
                        stage: STAGE.ERROR,
                    },
                });
            } catch (stageError) {
                console.error('Failed to mark finalizer stage as error', stageError);
            }
            this.send_sse(
                res,
                PHASE_TYPES.ERROR,
                {
                    message: 'Finalizing failed',
                    error: errorMessage,
                },
                system_message,
            );
        } finally {
            parser.reset();
            this.delete_parser(contract_id);
            this.update_contract_state(contract_id, GenerationStatus.IDLE);
            ResponseWriter.stream.end(res);
        }
    }

    protected async old_contract(
        res: Response,
        planner_chain: old_planner,
        coder_chain: old_coder,
        finalizer_chain: old_finalizer,
        user_instruction: string,
        contract_id: string,
        _chain: Chain,
        parser: StreamParser,
        idl: Object[],
    ) {
        try {
            console.log('user instruction: ', user_instruction);

            const planner_data = await planner_chain.invoke({
                user_instruction: user_instruction,
                idl: idl,
            });

            console.log(planner_data);

            const llm_message = await prisma.message.create({
                data: {
                    content: planner_data.context,
                    contractId: contract_id,
                    role: ChatRole.AI,
                },
            });

            console.log('the context: ', chalk.red(planner_data.context));
            this.send_sse(res, STAGE.CONTEXT, {
                context: planner_data.context,
                llmMessage: llm_message,
            });

            if (!planner_data.should_continue) {
                console.log('planner said to not continue.');
                parser.reset();
                this.delete_parser(contract_id);
                this.update_contract_state(contract_id, GenerationStatus.IDLE);
                ResponseWriter.stream.end(res);
                return;
            }

            let system_message = await prisma.message.create({
                data: {
                    contractId: contract_id,
                    role: ChatRole.SYSTEM,
                    content: 'starting to generate in a few seconds',
                    stage: STAGE.PLANNING,
                },
            });

            // send planning stage from here
            console.log('the stage: ', chalk.green('Planning'));
            this.send_sse(res, STAGE.PLANNING, { stage: 'Planning' }, system_message);

            const delete_files = planner_data.files_likely_affected
                .filter((f) => f.do === 'delete')
                .map((f) => f.file_path);

            const promptValue = await old_chat_coder_prompt.invoke({
                plan: planner_data.plan,
                contract_id,
                files_likely_affected: planner_data.files_likely_affected,
            });

            const initialMessages = promptValue.toChatMessages();

            const toolStepResult = await this.gpt_coder
                .bindTools([Tool.get_file])
                .invoke(initialMessages);

            const { toolResults } = await Tool.runner.invoke(toolStepResult);
            const { messages: toolMessages } = await Tool.convert.invoke({ toolResults });

            const code_stream = await this.gpt_coder.stream([
                ...initialMessages,
                toolStepResult,
                ...toolMessages,
                {
                    role: 'user',
                    content: 'Use the fetched file contents to implement the planned changes.',
                },
            ]);

            for await (const chunk of code_stream) {
                if (chunk && chunk.text) {
                    parser.feed(chunk.text, system_message);
                }
            }

            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.BUILDING,
                },
            });

            console.log('the stage: ', chalk.green('Building'));
            this.send_sse(res, STAGE.BUILDING, { stage: 'Building' }, system_message);

            const gen_files = parser.getGeneratedFiles();
            console.log('generated files: ', gen_files);
            const updated_contract = await this.update_contract(
                contract_id,
                gen_files,
                delete_files,
            );

            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.CREATING_FILES,
                },
            });

            console.log('the stage: ', chalk.green('Creating Files'));
            this.send_sse(res, STAGE.CREATING_FILES, { stage: 'Creating Files' }, system_message);

            this.old_finalizer(
                res,
                finalizer_chain,
                updated_contract,
                contract_id,
                parser,
                system_message,
                delete_files,
            );
        } catch (error) {
            this.handle_error(res, error, 'old_contract', contract_id, parser);
        }
    }

    protected async old_finalizer(
        res: Response,
        finalizer_chain: old_finalizer,
        generated_files: FileContent[],
        contract_id: string,
        parser: StreamParser,
        system_message: Message,
        delete_files: string[],
    ) {
        try {
            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.FINALIZING,
                },
            });

            console.log('the stage: ', chalk.green('Finalizing'));
            this.send_sse(res, STAGE.FINALIZING, { stage: 'Finalizing' }, system_message);

            const finalizer_data = await this.invokeFinalizerWithTimeout(
                finalizer_chain,
                generated_files,
            );

            system_message = await prisma.message.update({
                where: {
                    id: system_message.id,
                    contractId: contract_id,
                },
                data: {
                    stage: STAGE.END,
                },
            });
            console.log('the stage: ', chalk.green('END'));
            this.send_sse(res, STAGE.END, { stage: 'End', data: generated_files }, system_message);

            const llm_message = await prisma.message.create({
                data: {
                    contractId: contract_id,
                    role: ChatRole.AI,
                    content: finalizer_data.context,
                },
            });

            console.log('the context: ', chalk.red(finalizer_data.context));
            this.send_sse(
                res,
                STAGE.CONTEXT,
                { context: finalizer_data.context, llmMessage: llm_message },
                system_message,
            );

            this.update_idl(contract_id, finalizer_data.idl, delete_files);
        } catch (error) {
            console.error('Error while finalizing: ', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown finalizer error';
            try {
                system_message = await prisma.message.update({
                    where: {
                        id: system_message.id,
                        contractId: contract_id,
                    },
                    data: {
                        stage: STAGE.ERROR,
                    },
                });
            } catch (stageError) {
                console.error('Failed to mark finalizer stage as error', stageError);
            }
            this.send_sse(
                res,
                PHASE_TYPES.ERROR,
                {
                    message: 'Finalizing failed',
                    error: errorMessage,
                },
                system_message,
            );
        } finally {
            parser.reset();
            this.delete_parser(contract_id);
            this.update_contract_state(contract_id, GenerationStatus.IDLE);
            ResponseWriter.stream.end(res);
        }
    }

    protected async update_contract(
        contract_id: string,
        generated_files: FileContent[],
        deleting_files_path: string[],
    ) {
        try {
            const contract = await objectStore.get_resource_files(contract_id);

            let remaining_files: FileContent[] = contract;
            // delete the given files from the contract
            if (deleting_files_path.length > 0) {
                remaining_files = contract.filter(
                    (file) => !deleting_files_path.includes(file.path),
                );
            }

            // const gen_file_map = new Map(generated_files.map(file => [file.path, file.content]));
            const remaining_files_map = new Map(remaining_files.map((file) => [file.path, file]));
            const new_files: FileContent[] = [];

            // update old + add new
            generated_files.forEach((file) => {
                if (remaining_files_map.has(file.path)) {
                    remaining_files_map.set(file.path, file);
                } else {
                    new_files.push(file);
                }
            });

            const updated_contract: FileContent[] = [
                ...Array.from(remaining_files_map.values()),
                ...new_files,
            ];

            console.log(chalk.yellowBright('updating contract in s3...'));
            await objectStore.updateContractFiles(contract_id, updated_contract);

            return updated_contract;
        } catch (error) {
            console.error('Error while updating contract to s3: ', error);
            return [];
        }
    }

    protected async update_idl(
        contract_id: string,
        generated_idl_parts: IdlPart[],
        deleting_files_path: string[],
    ) {
        try {
            const contract = await prisma.contract.findUnique({
                where: {
                    id: contract_id,
                },
                select: {
                    summarisedObject: true,
                },
            });

            if (!contract?.summarisedObject) {
                await prisma.contract.update({
                    where: {
                        id: contract_id,
                    },
                    data: {
                        summarisedObject: JSON.stringify(generated_idl_parts),
                    },
                });
                return;
            }

            const idl = coerceIdlParts(JSON.parse(contract.summarisedObject));

            const remainingIdl = idl.filter((item) => !deleting_files_path.includes(item.path));

            const existingIdlMap = new Map(remainingIdl.map((item) => [item.path, item]));
            const newIdlParts: IdlPart[] = [];

            for (const gen_i of generated_idl_parts) {
                const existingIdl = existingIdlMap.get(gen_i.path);

                if (existingIdl) {
                    Object.assign(existingIdl, gen_i);
                } else {
                    newIdlParts.push(gen_i);
                }
            }

            const updatedIdl = [...remainingIdl, ...newIdlParts];

            await prisma.contract.update({
                where: {
                    id: contract_id,
                },
                data: {
                    summarisedObject: JSON.stringify(updatedIdl),
                },
            });
        } catch (error) {
            console.error('Error while updating idl: ', error);
        }
    }

    protected get_chains(
        chat: 'new' | 'old',
        model: MODEL,
        chain: Chain,
    ): {
        planner_chain: RunnableSequence;
        coder_chain: Runnable;
        finalizer_chain: RunnableSequence;
    } | null {
        try {
            if (chain !== Chain.BASE) {
                // DISABLED - Solana chain (see /chains/solana).
                throw new Error(`Unsupported chain for runtime: ${chain}`);
            }

            let planner_chain;
            let coder_chain;
            let finalizer_chain;

            const coder =
                model === MODEL.CLAUDE
                    ? this.claude_coder
                    : model === MODEL.OPENAI_GPT_5_3
                      ? this.openai_coder
                      : this.gpt_coder;

            switch (chat) {
                case 'new': {
                    planner_chain = RunnableSequence.from([
                        new_chat_planner_prompt,
                        this.gpt_planner.withStructuredOutput(new_planner_output_schema),
                    ]);

                    coder_chain = new_chat_coder_prompt.pipe(coder);

                    finalizer_chain = RunnableSequence.from([
                        finalizer_prompt,
                        this.gpt_finalizer.withStructuredOutput(finalizer_output_schema),
                    ]);

                    return {
                        planner_chain: planner_chain,
                        coder_chain: coder_chain,
                        finalizer_chain: finalizer_chain,
                    };
                }

                case 'old': {
                    planner_chain = RunnableSequence.from([
                        old_chat_planner_prompt,
                        this.gpt_planner.withStructuredOutput(old_planner_output_schema),
                    ]);

                    const coder_chain = old_chat_coder_prompt
                        .pipe(coder.bindTools([Tool.get_file]))
                        .pipe(Tool.runner)
                        .pipe(Tool.convert)
                        .pipe(
                            new RunnableLambda({
                                func: ({ messages }: { messages: BaseMessage[] }) => [
                                    ...messages,
                                    {
                                        role: 'user',
                                        content:
                                            'Use the fetched file contents to implement the planned changes.',
                                    },
                                ],
                            }),
                        )
                        .pipe(coder);

                    finalizer_chain = RunnableSequence.from([
                        finalizer_prompt,
                        this.gpt_finalizer.withStructuredOutput(finalizer_output_schema),
                    ]);

                    return {
                        planner_chain: planner_chain,
                        coder_chain: coder_chain,
                        finalizer_chain,
                    };
                }
            }
        } catch (error) {
            console.error('Error while getting chains: ', error);
            return null;
        }
    }

    public async plan_context(
        res: Response,
        chat: 'new' | 'old',
        user_instruction: string,
        model: MODEL,
        contract_id: string,
        chain: Chain = Chain.BASE,
        // idl?: Object[],
    ) {
        try {
            getChainRuntime(chain);
            const planner_chain = RunnableSequence.from([
                start_planning_context_prompt,
                this.gpt_planner.withStructuredOutput(plan_context_schema),
            ]);

            const planner_data = await planner_chain.invoke({ user_instruction });
            const message = await prisma.message.create({
                data: {
                    contractId: contract_id,
                    role: ChatRole.PLAN,
                    content: planner_data.short_description,
                    plannerContext: JSON.stringify(planner_data),
                },
            });
            ResponseWriter.success(
                res,
                message,
                `successfully outlined your plan for ${planner_data.contract_title}`,
            );
        } catch (err) {
            ResponseWriter.error(res, 'error in outlining your plan');
            console.error('Error while planning context ', err);
        }
    }

    protected get_parser(contract_id: string, res: Response): StreamParser {
        if (!this.parsers.has(contract_id)) {
            const parser = new StreamParser();

            parser.on(PHASE_TYPES.THINKING, ({ data, systemMessage }) =>
                this.send_sse(res, PHASE_TYPES.THINKING, data, systemMessage),
            );

            parser.on(PHASE_TYPES.GENERATING, ({ data, systemMessage }) =>
                this.send_sse(res, PHASE_TYPES.GENERATING, data, systemMessage),
            );

            parser.on(PHASE_TYPES.BUILDING, ({ data, systemMessage }) =>
                this.send_sse(res, PHASE_TYPES.BUILDING, data, systemMessage),
            );

            parser.on(PHASE_TYPES.CREATING_FILES, ({ data, systemMessage }) =>
                this.send_sse(res, PHASE_TYPES.CREATING_FILES, data, systemMessage),
            );

            parser.on(PHASE_TYPES.COMPLETE, ({ data, systemMessage }) =>
                this.send_sse(res, PHASE_TYPES.COMPLETE, data, systemMessage),
            );

            parser.on(FILE_STRUCTURE_TYPES.EDITING_FILE, ({ data, systemMessage }) =>
                this.send_sse(res, FILE_STRUCTURE_TYPES.EDITING_FILE, data, systemMessage),
            );

            parser.on(PHASE_TYPES.ERROR, ({ data, systemMessage }) =>
                this.send_sse(res, PHASE_TYPES.ERROR, data, systemMessage),
            );

            parser.on(STAGE.CONTEXT, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.CONTEXT, data, systemMessage),
            );

            parser.on(STAGE.PLANNING, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.PLANNING, data, systemMessage),
            );

            parser.on(STAGE.GENERATING_CODE, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.GENERATING_CODE, data, systemMessage),
            );

            parser.on(STAGE.BUILDING, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.BUILDING, data, systemMessage),
            );

            parser.on(STAGE.CREATING_FILES, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.CREATING_FILES, data, systemMessage),
            );

            parser.on(STAGE.FINALIZING, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.FINALIZING, data, systemMessage),
            );

            parser.on(STAGE.END, ({ data, systemMessage }) =>
                this.send_sse(res, STAGE.END, data, systemMessage),
            );

            this.parsers.set(contract_id, parser);
        }
        return this.parsers.get(contract_id) as StreamParser;
    }

    protected delete_parser(contract_id: string): void {
        this.parsers.delete(contract_id);
    }

    protected async update_contract_state(contract_id: string, state: GenerationStatus) {
        await prisma.contract.update({
            where: {
                id: contract_id,
            },
            data: {
                generationStatus: state,
            },
        });
    }

    public send_sse(
        res: Response,
        type: PHASE_TYPES | FILE_STRUCTURE_TYPES | STAGE,
        data: StreamEventData,
        system_message?: Message,
    ): void {
        const event: StreamEvent = {
            type,
            data,
            systemMessage: system_message as Message,
            timestamp: Date.now(),
        };

        ResponseWriter.stream.write(res, `data: ${JSON.stringify(event)}\n\n`);
    }

    public create_stream(res: Response): void {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.setHeader('X-Accel-Buffering', 'no');
        res.flushHeaders();
    }

    // this after any fn throws an error this method resets parser, delete the parser from mapping, make the contract idle again and sends back the data
    protected async handle_error(
        res: Response,
        error: unknown,
        coming_from_fn: string,
        contract_id: string,
        parser: StreamParser,
    ) {
        console.error(`Error in ${coming_from_fn}`, error);
        const rawErrorMessage = error instanceof Error ? error.message : 'Unknown generator error';
        const errorMessage = this.mapGenerationErrorMessage(rawErrorMessage);
        this.send_sse(res, PHASE_TYPES.ERROR, {
            message: `Generation failed in ${coming_from_fn}`,
            error: errorMessage,
        });
        parser.reset();
        this.delete_parser(contract_id);
        this.update_contract_state(contract_id, GenerationStatus.IDLE);
        ResponseWriter.stream.end(res);
    }
}
