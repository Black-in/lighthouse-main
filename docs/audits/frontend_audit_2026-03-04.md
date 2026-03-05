# Frontend Audit - Base-Only Surface (2026-03-04)

## Scope
- Repository: `lighthouse-club`
- Commit: `20ea77e`
- Branch: `main`
- Audit date: 2026-03-04

## Executive Summary
Frontend is Base-first and currently does not expose active Solana execution paths. Wallet/provider stack is Base-compatible (`wagmi` + `OnchainKit`), generate/plan requests are sent with `chain: BASE`, and terminal routes only Base deploy commands while keeping Solana commands in disabled compatibility stubs.

## What Is Implemented

### 1. Base wallet/provider stack
- `WalletProviders` uses:
  - `wagmi/chains` (`baseSepolia`, `base`)
  - `@coinbase/onchainkit` provider
- File:
  - `apps/web/src/providers/WalletProviders.tsx:11-13`
  - `apps/web/src/providers/WalletProviders.tsx:54-63`
  - `apps/web/src/providers/WalletProviders.tsx:77-80`

### 2. Base chain hardcoded for generation/plan requests
- Requests send `chain: Chain.BASE` for planner, generate, continue chat:
  - `apps/web/src/lib/server/generate_contract.ts:48`
  - `apps/web/src/lib/server/generate_contract.ts:97`
  - `apps/web/src/lib/server/generate_contract.ts:257`

### 3. Terminal command surface
- Exposed premium deploy commands are Base-only:
  - `winter deploy --base-sepolia`
  - `winter deploy --base-mainnet`
- Solana command entries are retained only as disabled compatibility with explicit disabled messages.
- File:
  - `apps/web/src/lib/terminal_commands.ts:35-37`
  - `apps/web/src/lib/terminal_commands.ts:54-57`
  - `apps/web/src/lib/terminal_commands.ts:70-73`

### 4. Terminal dispatch behavior
- Solana deploy commands are no-op with disabled comments.
- Base deploy commands are sent over socket.
- File:
  - `apps/web/src/hooks/useTerminal.ts:59-67`
  - `apps/web/src/hooks/useTerminal.ts:69-77`

### 5. Settings/network UI
- Builder network selector only includes Base Sepolia and Base Mainnet.
- File:
  - `apps/web/src/components/builder/BuilderSettingsPanel.tsx:84-85`

## Runs Performed and Results

1. `pnpm --filter web lint`
- Result: PASS (warnings only)
- Output summary: 9 warnings (`no-unused-vars`, hook dependency warning, and `next/no-img-element`).

2. `pnpm --filter web build`
- Result: PASS
- Output summary:
  - Next.js production build completed.
  - Static and dynamic routes generated.
  - Same warning class as lint run.

3. Static scan for Solana references
- Command: `rg -n "@solana|wallet-adapter|solana" apps/web/src packages/types -S`
- Result:
  - No active Solana wallet adapter/provider usage.
  - Solana appears in legacy type enums and explicit disabled command branches.

## Remaining Risks / Notes
- `packages/types` still includes legacy Solana enum values for compatibility. This is acceptable while runtime behavior remains disabled.
- Frontend ESLint warnings are non-blocking but should be cleaned for release hygiene.

