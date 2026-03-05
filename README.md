# Lighthouse Main (Backend)

`lighthouse-main` is the backend and orchestration service for BlackIn, a Base-only AI code editor that converts a prompt into a generated workspace and CRE-backed deployment flow.

## Active Chain Model

- Base is the only active chain in runtime behavior.
- Solana code is retained for legacy reference and is disabled in API/socket command paths.

## Core Flow (Single Prompt to Deployment)

1. `POST /api/v1/generate` receives a prompt (defaults to `chain=BASE`).
2. Generator creates workspace files (web app, contracts, CRE workflow artifacts).
3. Files are uploaded to object storage.
4. A `cre-deploy` queue job runs workflow lifecycle steps:
   - `workflow simulate`
   - `workflow deploy`
   - `workflow activate`
5. Deployment metadata is persisted (`Deployment`, `BuildJob`, `Contract`) and streamed to clients.

## CRE Runtime Requirements

- CRE CLI available (`cre version` must work).
- Foundry (`forge --version` must work).
- `SERVER_CRE_API_KEY` configured.
- `SERVER_CRE_ETH_PRIVATE_KEY` or `SERVER_BASE_DEPLOYER_PRIVATE_KEY` configured.
- Base and Ethereum RPC URLs configured.
- Deploy access enabled on your CRE organization.

## Local Run (Access Pending Safe Mode)

If CRE deploy access is still pending approval, backend/socket/frontend can still run locally for all non-deploy flows.

### 1) Start infrastructure

```bash
cd /Users/ayushsrivastava/BlackIn/lighthouse-main
docker compose up -d postgres redis
pnpm db:migrate:deploy
```

### 2) Start backend and socket

```bash
pnpm --filter server dev
pnpm --filter socket dev
```

### 3) Start frontend

From `lighthouse-club`:

```bash
pnpm --filter web dev
```

### 4) Verify listeners

- Backend: `http://localhost:8787`
- Socket: `ws://localhost:8282`
- Frontend: `http://localhost:3000`

## CRE Access Diagnostics

Use CLI to verify current account state:

```bash
cre version
cre whoami
cre account access
cre account list-key
```

If `Deploy Access: Not enabled`, workflow deploy and key linking remain blocked until Chainlink approval.

## Security and Operations Notes

- CORS allowlist is enforced via `SERVER_CORS_ORIGINS`.
- CRE readiness endpoint is protected by auth and admin-secret middleware.
- Startup preflight strictness is controlled by `SERVER_CRE_STARTUP_PRECHECK_REQUIRED`.
- Staging CRE E2E workflow runs on `main`, `release/*`, and `rc/*` pushes.
- Release runbook: `docs/operations/staging_cre_release_runbook.md`.

## Developer Commands

```bash
pnpm --filter server lint
pnpm --filter server run test:cre
pnpm --filter server run test:api
pnpm --filter server build
pnpm --filter server run smoke:cre-e2e
```

## Repository Notes

- Keep legacy Solana code for reference only; do not activate it in runtime behavior.
