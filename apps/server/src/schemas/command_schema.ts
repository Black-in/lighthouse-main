/*
 * Lighthouse
 * © 2026 ayushshrivastv
 */

import { COMMAND } from '@lighthouse/types';
import z from 'zod';

export const command_schema = z.enum([
    COMMAND.lighthouse_BUILD,
    COMMAND.lighthouse_TEST,
    COMMAND.lighthouse_DEPLOY_DEVNET,
    COMMAND.lighthouse_DEPLOY_MAINNET,
]);
