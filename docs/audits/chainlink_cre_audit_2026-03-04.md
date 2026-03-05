# Chainlink CRE Implementation Audit (2026-03-04)

## Scope
- Repository: `lighthouse-main`
- Reference: [Chainlink CRE full TS/CLI reference](https://docs.chain.link/cre/llms-full-ts.txt)
- Audit date: 2026-03-04

## Executive Summary
Backend implementation now matches the core CRE operational lifecycle expected by docs for deployment workflows:
- simulate -> deploy -> activate
- authenticated/headless preflight
- deploy access checks
- linked key checks
- funded mainnet wallet checks
- metadata persistence and queue-backed execution

Remaining work is operational (staging credentials/funding and live environment validation), not major code scaffolding.

## CRE Requirements Mapping

### 1. CLI lifecycle execution
- Doc expectation: use official CRE commands for workflow operations.
- Implemented:
  - `cre workflow simulate` in deploy flow
  - `cre workflow deploy` in deploy flow
  - `cre workflow activate` in deploy flow
- Evidence:
  - `apps/server/src/chains/base/cre_adapter.ts:1288-1405`

Status: Implemented

### 2. Authentication and deploy access
- Doc expectation: authenticated CLI session/API key with deploy access.
- Implemented:
  - `cre whoami` + fallback `cre account access` parsing
  - hard fail when deploy access is not enabled
- Evidence:
  - `apps/server/src/chains/base/cre_adapter.ts:249-287`
  - `apps/server/src/chains/base/cre_adapter.ts:1151-1164`
  - `apps/server/src/chains/base/cre_adapter.ts:1170-1174`

Status: Implemented

### 3. Linked owner key prerequisite
- Doc expectation: key linked via `cre account link-key` before deploy.
- Implemented:
  - `cre account list-key` is parsed; deployer address must be present and verified.
- Evidence:
  - `apps/server/src/chains/base/cre_adapter.ts:337-356`
  - `apps/server/src/chains/base/cre_linked_keys_parser.ts:11-57`

Status: Implemented

### 4. Funded ETH mainnet wallet prerequisite
- Doc expectation: funded wallet for registry transactions on Ethereum Mainnet.
- Implemented:
  - preflight checks deployer balance via `cast balance` against Ethereum Mainnet RPC.
  - minimum required wei configurable (`SERVER_CRE_MIN_MAINNET_BALANCE_WEI`).
- Evidence:
  - `apps/server/src/chains/base/cre_adapter.ts:358-387`
  - `apps/server/src/chains/base/cre_adapter.ts:1189-1217`
  - `apps/server/src/configs/config.env.ts:75-78`

Status: Implemented

### 5. Artifact and workflow handling
- Implemented:
  - create-if-missing scaffold for workflow files
  - config patching for network + contract address
  - preserves user workflow artifacts if present
- Evidence:
  - `apps/server/src/chains/base/cre_adapter.ts:934-952`
  - `apps/server/src/chains/base/cre_adapter.ts:954-982`

Status: Implemented

### 6. Deployment correctness and DB persistence
- Implemented:
  - contract marked deployed only on valid non-zero address
  - deployment metadata stored in DB
- Evidence:
  - `apps/server/src/queue/cre_runtime_worker.ts:235-244`
  - `apps/server/src/queue/cre_runtime_worker.ts:261-283`

Status: Implemented

### 7. Operational readiness and release gate
- Implemented:
  - protected `/health/cre` endpoint for readiness checks
  - staging E2E workflow automatically runs on `main` push and validates release SHA coupling
- Evidence:
  - `apps/server/src/routes/index.ts:50-56`
  - `.github/workflows/staging-cre-e2e.yml:3-7`
  - `.github/workflows/staging-cre-e2e.yml:31-57`

Status: Implemented

## Runs Performed and Results

1. `pnpm --filter server run test:cre`
- Result: PASS
- Includes deploy access and linked key parser fixtures (10/10 pass).

2. `pnpm --filter server build`
- Result: PASS

3. `docker build -f apps/server/Dockerfile -t lighthouse-server-cre:audit .`
- Result: PASS
- Verifies pinned CRE/Foundry runtime image builds end-to-end.

## What Is Not Fully Proven Yet
- A real staging/prod deploy can still fail if secrets or wallet funding are missing, even though code checks are in place.
- Full institutional characteristics (privacy/compliance/data policy) ultimately depend on workflow logic and external integrations configured per generated app, not only platform scaffolding.

## Recommended Release Checklist
1. Set and verify env values in staging:
   - `SERVER_CRE_API_KEY`
   - `SERVER_CRE_ETH_PRIVATE_KEY` or `SERVER_BASE_DEPLOYER_PRIVATE_KEY`
   - `SERVER_ETHEREUM_MAINNET_RPC_URL`
   - `SERVER_CRE_MIN_MAINNET_BALANCE_WEI`
2. Confirm linked key exists for deployer account.
3. Confirm deployer has ETH on Ethereum Mainnet.
4. Run staging E2E smoke from CI and verify green before production rollout.

