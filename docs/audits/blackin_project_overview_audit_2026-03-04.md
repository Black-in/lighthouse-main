# BlackIn Project Overview Audit (2026-03-04)

## Purpose of This Document
This document explains what BlackIn is, how it works end to end, what it can do today, how it is implemented across backend and frontend, and the recommended plan to continue building it.

## Project Definition
BlackIn is an AI-powered, web-native developer environment (Cursor-style UX for browser) focused on generating and shipping Base-native applications from a single prompt.

Target product behavior:
1. User enters one natural-language prompt.
2. AI plans and generates a runnable app workspace.
3. Contracts and CRE workflow artifacts are produced.
4. Deploy pipeline runs on Base with Chainlink CRE orchestration.
5. User gets logs, deployment metadata, and a runnable project output.

## What BlackIn Can Do Today

### User-facing capabilities
1. Prompt-based code generation with streamed stages in UI.
2. Interactive editor + file tree + chat panel + terminal.
3. Terminal command dispatch for build/test and Base deploy commands.
4. Base wallet/provider support via Wagmi + OnchainKit.
5. Auto-queue deploy to Base Sepolia in backend generation path.

### Chain behavior
1. Base is default and active.
2. Solana logic is retained as legacy code but runtime access is disabled with explicit guard messages.

## How It Works (End-to-End Flow)

### 1. Frontend request and streaming
1. Frontend calls generate/plan API with `chain: BASE`:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/lib/server/generate_contract.ts:48`
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/lib/server/generate_contract.ts:97`
2. Frontend consumes SSE stream stages and updates UI state.

### 2. Backend generation pipeline
1. Express server routes requests through `/api/v1` router:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/index.ts:35`
2. Generator runs planner -> coder -> file creation -> finalizer with stream protocol.
3. Generated files are uploaded to object store before deploy queueing:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/generator/generator.ts:384-392`
4. Deploy job is queued for Base Sepolia by default.

### 3. CRE deploy worker lifecycle
1. Deploy queue job is consumed by CRE runtime worker.
2. Worker loads generated files and executes CRE deploy adapter.
3. Adapter runs strict sequence:
   - Foundry contract deploy
   - `cre workflow simulate`
   - `cre workflow deploy`
   - `cre workflow activate`
4. Success requires valid non-zero contract address before contract is marked deployed:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/queue/cre_runtime_worker.ts:235-244`
5. Deployment metadata is persisted to DB deployment record.

### 4. UI terminal/log transport
1. Frontend terminal sends commands via websocket hook.
2. Backend publishes terminal progress events from worker through Redis pub/sub.

## Implementation Map (Current Code)

### Backend (`lighthouse-main`)
1. API + server bootstrap:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/index.ts`
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/routes/index.ts`
2. Generation engine:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/generator/generator.ts`
3. Base chain + CRE adapter:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/chains/base/cre_adapter.ts`
4. CRE queue + workers:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/queue/cre_worker_queue.ts`
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/queue/cre_runtime_worker.ts`
5. Chain guards (Base enabled, Solana disabled):
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/src/chains/request_guard.ts`
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/socket/src/services/services.command.ts`
6. Runtime containerization (pinned CRE + Foundry):
   - `/Users/ayushsrivastava/BlackIn/lighthouse-main/apps/server/Dockerfile`

### Frontend (`lighthouse-club`)
1. Base provider stack:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/providers/WalletProviders.tsx`
2. Prompt-to-generate client and SSE handling:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/lib/server/generate_contract.ts`
3. Editor workspace and logs UI:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/components/builder/BuilderDashboard.tsx`
4. Terminal command surface:
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/lib/terminal_commands.ts`
   - `/Users/ayushsrivastava/BlackIn/lighthouse-club/apps/web/src/hooks/useTerminal.ts`

## Current Audit Status Snapshot

### Backend run results (latest local run)
1. `pnpm --filter server lint`: PASS (warnings only)
2. `pnpm --filter server run test:cre`: PASS (10/10 tests)
3. `pnpm --filter server build`: PASS
4. `docker build -f apps/server/Dockerfile -t lighthouse-server-cre:audit .`: PASS

### Frontend run results (latest local run)
1. `pnpm --filter web lint`: PASS (warnings only)
2. `pnpm --filter web build`: PASS

## What This Project Is Not Yet
1. Not yet fully proven in this local audit as a real staged production deployment until staging secrets, linked key, and wallet funding are validated continuously by CI.
2. Not yet fully cleaned of legacy Solana references in docs/types; runtime paths are disabled, but compatibility enums/labels still exist in some shared types and command mappings.
3. README content in both repos is partially stale (still describing Solana/Anchor in sections), which can confuse contributors.

## Build Plan (Recommended)

### Phase 1: Product hardening (immediate)
1. Keep Base-only runtime and explicit Solana-disable guards.
2. Make staging CRE E2E workflow a mandatory release gate.
3. Add dashboard/alerts for deploy failures and preflight failures.

### Phase 2: Single-prompt quality upgrades
1. Improve planner/coder prompts for broader app classes (payments, dashboards, analytics, subscriptions).
2. Add template quality rubric and auto-validation on generated workspaces.
3. Add deterministic post-generation checks (workspace shape, contract compile signal, config completeness).

### Phase 3: CRE production reliability
1. Expand CRE preflight to include richer diagnostics surfaced to UI (safe/redacted).
2. Add retry/backoff strategy and dead-letter queue handling for deploy jobs.
3. Add provenance metadata (generation config, workflow hash, deployment signature chain) for auditability.

### Phase 4: Developer experience
1. Tighten lint warning budgets for frontend/backend.
2. Add richer terminal help and auto-complete for Base commands.
3. Add deploy timeline UI with step-level statuses (`foundry`, `simulate`, `deploy`, `activate`).

### Phase 5: Documentation and governance
1. Rewrite top-level README files to Base + CRE narrative.
2. Publish architecture docs for contributors (request flow, worker model, data model).
3. Maintain a release checklist for env preconditions (API key, linked key, funded wallet, release SHA checks).

## Definition of Done for “Project Fully Implemented”
1. Single prompt reliably generates runnable `apps/web + contracts + CRE workflow` outputs.
2. CRE deploy lifecycle succeeds on staging via CI gate for every release candidate.
3. Base Sepolia deploy metadata and explorer links are present and correct in DB/UI.
4. Solana execution paths remain inaccessible to users.
5. Documentation and operational runbooks match actual system behavior.

