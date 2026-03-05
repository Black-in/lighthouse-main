/*
 * Lighthouse
 * © 2026 ayushshrivastv
 */

import z from 'zod';

export const finalizer_output_schema = z.object({
    idl: z
        .array(
            z.object({
                id: z.string().optional(),
                path: z.string(),
                type: z.string().optional(),
                // Keep this loose for Gemini structured output compatibility.
                content: z.unknown().optional(),
            }),
        )
        .default([]),
    context: z.string(),
});
