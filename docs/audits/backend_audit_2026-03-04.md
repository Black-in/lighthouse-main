# Backend Audit - Base + CRE (2026-03-04)

## Scope
- Repository: `lighthouse-main`
- Commit: `0caa1c0`
- Branch: `main`
- Audit date: 2026-03-04

## Executive Summary
Backend is now Base-default with Solana disabled in request/command execution paths, and CRE deployment flow is implemented with official lifecycle commands (`simulate`, `deploy`, `activate`) plus stricter deploy preflight checks.

## What Is Implemented

### 1. Base default, Solana disabled (runtime behavior)
- Solana requests are rejected with `422` via chain guard:
  - `apps/server/src/chains/request_guard.ts:11-20`
- Legacy Solana deploy commands are blocked in socket command service:
  - `apps/socket/src/services/services.command.ts:81-89`
- Base deploy commands are accepted and queued with cache bypass for deploy commands:
  - `apps/socket/src/services/services.command.ts:91-137`

### 2. CRE deployment lifecycle and strict success gate
- CRE deploy path runs:
  - `workflow simulate`
  - `workflow deploy`
  - `workflow activate`
  - In `apps/server/src/chains/base/cre_adapter.ts:1288-1405`
- Contract deployment success requires valid non-zero address before marking success:
  - `apps/server/src/queue/cre_runtime_worker.ts:235-244`
- Deployment metadata persisted to DB:
  - `apps/server/src/queue/cre_runtime_worker.ts:272-283`

### 3. CRE preflight hardening (docs-aligned)
- Existing checks:
  - CRE CLI present + min version
  - `forge` present
  - auth + deploy access
- Added checks:
  - linked key verification (`cre account list-key` parsing)
  - funded ETH mainnet wallet check (via `cast balance`)
  - Files:
    - `apps/server/src/chains/base/cre_adapter.ts:1081-1165` (preflight contract)
    - `apps/server/src/chains/base/cre_adapter.ts:337-387` (linked key + balance helpers)
    - `apps/server/src/chains/base/cre_linked_keys_parser.ts`

### 4. Health endpoint hardening
- `/api/v1/health/cre` is protected by auth + admin secret middleware:
  - `apps/server/src/routes/index.ts:50-56`
- Admin secret middleware:
  - `apps/server/src/middlewares/middleware.adminSecret.ts:22-40`
- Health response is redacted and includes release SHA for artifact-coupling checks:
  - `apps/server/src/controllers/health-controller/getCreHealthController.ts:110-141`

### 5. Deterministic server runtime image
- Dockerfile now pins base image digest, CRE CLI version, Foundry version, prebuilt CRE deps, pnpm version:
  - `apps/server/Dockerfile:1-52`

### 6. Generation/deploy ordering guarantee
- File upload awaited before deploy queue enqueue:
  - `apps/server/src/generator/generator.ts:384-392`

### 7. Staging gate automation
- Staging CRE E2E runs on `push` to `main` and `workflow_dispatch`:
  - `.github/workflows/staging-cre-e2e.yml:3-7`
- Workflow blocks until staging release SHA equals `GITHUB_SHA`:
  - `.github/workflows/staging-cre-e2e.yml:31-57`

## Runs Performed and Results

### A. Server quality gates
1. `pnpm --filter server lint`
- Result: PASS (warnings only)
- Warnings: 12 pre-existing `no-explicit-any` style warnings in generator/tool/logger files.

2. `pnpm --filter server run test:cre`
- Result: PASS
- Output summary: 10 tests passed, 0 failed.
- Includes deploy-access parser tests and linked-key parser tests.

3. `pnpm --filter server build`
- Result: PASS
- Output summary: esbuild completed; `dist/index.js` and source map generated.

### B. Docker runtime build
1. `docker build -f apps/server/Dockerfile -t lighthouse-server-cre:audit .`
- Result: PASS
- Output summary:
  - CRE CLI and Foundry installation steps complete.
  - `pnpm install`, `prisma generate`, and `pnpm build` complete.
  - Final image created: `lighthouse-server-cre:audit`.
- Note: optional native package build warnings from `node-gyp` in transitive deps appeared during install but did not fail build.

## Remaining Risks / Notes
- Full real-world CRE deploy still depends on valid runtime secrets and funded deploy wallet in staging/prod.
- `cre-generation` queue worker is now explicitly disabled; full lifecycle is executed through `cre-deploy` queue only.
- `@solana/web3.js` still exists in backend dependencies as legacy code retention; runtime is disabled by guards.

