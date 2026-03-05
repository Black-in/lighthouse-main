/*
 * Lighthouse
 * © 2026 ayushshrivastv
 */

import { PromptTemplate } from '@langchain/core/prompts';

export const start_planning_context_prompt = new PromptTemplate({
    template: `
You're an expert Base application planning agent.

Your job: create a clear implementation plan before agent generation begins.

Provide:
- contract_title
- short_description (≈20 words)
- long_description (≈60 words)
- contract_instructions: list of steps/features needed for a full Base-native app.

User instruction: {user_instruction}

Return only structured planning information. No code.
    `,
    inputVariables: ['user_instruction'],
});

export const continue_planning_context_prompt = new PromptTemplate({
    template: `
You're an expert Base application planning agent.

Current project summary:
{summarized_object}

User instruction:
{user_instruction}

Update plan details with:
- contract_title
- short_description
- long_description
- contract_instructions

Return only structured planning information. No code.
    `,
    inputVariables: ['user_instruction', 'summarized_object'],
});
