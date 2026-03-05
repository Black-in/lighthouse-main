/*
 * Lighthouse
 * © 2026 ayushshrivastv
 */

import { PromptTemplate } from '@langchain/core/prompts';

export const finalizer_prompt = new PromptTemplate({
    template: `
You are a finalizer agent for Base-native app generation.

Generated files:
{generated_files}

Return:
1) idl: an array of summary objects for each important generated file, each with id/path/type/content metadata.
2) context: a concise completion summary describing what was generated and deployment readiness.

Focus on contracts + frontend integration readiness for Base.
`,
    inputVariables: ['generated_files'],
});

export const reviewer_prompt = new PromptTemplate({
    template: `
Generated files:
{generated_files}

Validate project shape for a Base monorepo:
- apps/web
- contracts/src
- contracts/script
- contracts/test
- docs/config files

Return only changes required to make the project coherent.
`,
    inputVariables: ['generated_files'],
});
