# Future Audit Planning - Full Base + Chainlink CRE Readiness (2026-03-04)

## Goal
Define an execution plan to identify and resolve remaining failures, bugs, and operational gaps so BlackIn can run reliably as a Base-only AI code editor with production-grade Chainlink CRE deployment.

## Target State (Definition of Ready)
1. Base-only runtime in API, socket commands, UI, and providers.
2. Single prompt -> generate workspace -> deploy contract + CRE workflow (`simulate`, `deploy`, `activate`) works repeatedly in staging.
3. CI release gate proves deploy success on staging for every release candidate.
4. Security and operational posture is acceptable for public server exposure.

## Current Run Snapshot (Latest Audit Inputs)

### Backend (`lighthouse-main`)
1. `pnpm --filter server lint`: PASS with warnings (12 warnings, 0 errors).
2. `pnpm --filter server run test:cre`: PASS (10/10 tests).
3. `pnpm --filter server build`: PASS.
4. `docker build -f apps/server/Dockerfile -t lighthouse-server-cre:audit .`: PASS.

### Frontend (`lighthouse-club`)
1. `pnpm --filter web lint`: PASS with warnings (9 warnings, 0 errors).
2. `pnpm --filter web build`: PASS.

Conclusion: no hard compile/test failures in current local audits, but multiple production-readiness and operational risks remain.

## Findings Backlog (Prioritized)

## P0 - Must Fix Before Public Production Traffic

### P0.1 Staging E2E proof is not yet evidenced as consistently passing with live credentials
- Risk: local code passes but real deploy pipeline may fail due credential/link-key/funding/runtime conditions.
- Evidence:
  - CRE preflight does runtime checks, but success still depends on deployed environment values.
  - `apps/server/src/chains/base/cre_adapter.ts:1123-1215`
  - `.github/workflows/staging-cre-e2e.yml:31-68`
- Required action:
  1. Run staging workflow on release candidate branch and capture green proof artifacts.
  2. Require this check for production promotion.

### P0.2 CORS policy is unsafe/inconsistent for internet-facing deployment
- Risk: `origin: '*'` with `credentials: true` is invalid for credentialed browser flows and can create security/behavioral issues.
- Evidence:
  - `apps/server/src/index.ts:24-29`
- Required action:
  1. Replace wildcard origin with explicit allowlist env (`SERVER_CORS_ORIGINS`).
  2. Disable credentials for wildcard mode, or enforce strict origin matching.
  3. Add integration test for allowed/blocked origins.

## P1 - High Priority Stability and Architecture Corrections

### P1.1 `cre-generation` queue path is still instantiated but intentionally fails
- Risk: dead path exists; if enqueued by old clients/scripts, produces avoidable failures/noise.
- Evidence:
  - Queue still created: `apps/server/src/services/init.ts:43`
  - Queue API still exposes generation: `apps/server/src/queue/cre_worker_queue.ts:30-36`
  - Worker throws intentional failure: `apps/server/src/queue/cre_runtime_worker.ts:100-116`
- Required action:
  1. Remove `cre-generation` queue wiring entirely, or convert it to a no-op metrics event without failed jobs.
  2. Keep only `cre-deploy` path for single-prompt lifecycle.

### P1.2 Legacy/stale project docs still describe Solana/Anchor behavior
- Risk: contributor confusion, wrong operator expectations, onboarding mistakes.
- Evidence:
  - `README.md` still references Solana/Anchor and Solana deploy targets.
  - `README.md:11-17`, `README.md:75-77`
- Required action:
  1. Rewrite README to Base + CRE architecture and commands.
  2. Add migration note for retained-but-disabled Solana code.

### P1.3 Security hardening cleanup for non-essential routes
- Risk: non-product route left exposed (`/aniruddha`) and potential attack surface clutter.
- Evidence:
  - `apps/server/src/index.ts:31-33`
- Required action:
  1. Remove debug/placeholder routes from production build.
  2. Restrict health/readiness surfaces to authenticated admin paths only.

## P2 - Code Health, Maintainability, and UX Reliability

### P2.1 Backend lint warnings (type safety debt)
- Risk: weaker static guarantees in core generation logic.
- Evidence:
  - `apps/server/src/generator/generator.ts:668,696,699,700,781`
  - `apps/server/src/generator/tools/tool.ts:95,97,125,127,129`
  - `apps/server/src/utils/logger.ts:23-24`
- Required action:
  1. Remove `any` usage in generator and tool pipelines.
  2. Introduce typed interfaces for tool call payload/results.

### P2.2 Frontend lint warnings (hook deps, unused vars, image optimization)
- Risk: subtle runtime bugs and performance regressions.
- Evidence:
  - `apps/web/src/components/base/DashboardTextAreaBottom.tsx:14`
  - `apps/web/src/components/builder/BuilderDashboard.tsx:132`
  - `apps/web/src/components/builder/BuilderMoreOptionsPanel.tsx:35,38,89`
  - `apps/web/src/components/builder/PlaygroundLeftRail.tsx:60,93,143`
- Required action:
  1. Fix hook dependency lists.
  2. Remove dead vars/args.
  3. Replace hot-path `<img>` with `next/image` where appropriate.

### P2.3 Docker install noise from optional native modules
- Risk: noisy builds mask real failures.
- Evidence:
  - Docker build logs show optional `node-gyp` failures during `pnpm install` (non-fatal).
- Required action:
  1. Install `python3` in image or suppress optional native install attempts where safe.
  2. Document expected optional warnings if intentionally tolerated.

## Workstream Plan

## Workstream A - Release Safety and Operations
1. Make staging CRE E2E a required status check for release branches.
2. Add deployment runbook with exact env prerequisites:
   - `SERVER_CRE_API_KEY`
   - `SERVER_CRE_ETH_PRIVATE_KEY` or `SERVER_BASE_DEPLOYER_PRIVATE_KEY`
   - `SERVER_ETHEREUM_MAINNET_RPC_URL`
   - `SERVER_CRE_MIN_MAINNET_BALANCE_WEI`
3. Track staging run artifacts (workflow id, tx hashes, contract address).

## Workstream B - Runtime and API Security
1. Replace permissive CORS config with explicit allowlist.
2. Remove debug endpoint(s) not part of product contract.
3. Add API security checklist pass before production cutover.

## Workstream C - CRE Path Simplification
1. Remove `cre-generation` queue/worker path from init and queue definitions.
2. Keep deploy path as single source of truth for CRE lifecycle.
3. Add regression test to assert no generation queue dispatch occurs from prompt flow.

## Workstream D - Code Quality and DX
1. Burn down backend and frontend lint warnings to zero (or documented budget).
2. Add typed wrappers around tool runner and logger.
3. Publish updated Base/CRE contributor docs.

## Validation Plan

### Functional Validation
1. `POST /generate` with long prompt (BASE default) -> SSE reaches `END`.
2. Deploy job reaches `success`, stores non-zero address + metadata.
3. Terminal command `winter deploy --base-sepolia` works; Solana commands rejected.

### Security Validation
1. CORS allows only configured origins.
2. `/api/v1/health/cre` blocked without auth + admin secret.
3. No debug/public test routes remain in prod.

### Operational Validation
1. Staging workflow green on release candidate commit SHA.
2. At least N consecutive successful staging deploy smoke runs (recommend N=5).
3. Mean queue latency and failure rate within thresholds.

## Suggested Milestones
1. M1 (1-2 days): CORS fix, debug-route removal, docs correction.
2. M2 (2-3 days): Remove `cre-generation` dead path, add regression checks.
3. M3 (2-4 days): Lint warning cleanup + typed tool/logging improvements.
4. M4 (ongoing): Staging soak and release gate enforcement.

## Exit Criteria for “Fully Base + CRE Ready”
1. No P0 open.
2. Staging CRE E2E gate required and passing for release candidate.
3. Single-prompt deploy path stable under repeated runs.
4. Base-only behavior validated across API/socket/UI; Solana remains disabled and hidden from active behavior.

## Reference
- Chainlink CRE full TS/CLI reference: https://docs.chain.link/cre/llms-full-ts.txt

