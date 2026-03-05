# Local CRE Access Pending Runbook

This runbook defines how to run BlackIn locally while your CRE organization is waiting for deploy access approval.

## Goal

Keep backend, socket, and frontend fully operational for generation, editing, and terminal flows, while acknowledging that workflow deployment stays blocked until CRE access is enabled.

## Preconditions

- Docker Desktop running
- `cre` CLI installed and available in shell
- `lighthouse-main/.env` configured
- `lighthouse-club/.env.local` configured

## 1) Bring up infra

```bash
cd /Users/ayushsrivastava/BlackIn/lighthouse-main
docker compose up -d postgres redis
pnpm db:migrate:deploy
```

## 2) Start services

Terminal A:

```bash
cd /Users/ayushsrivastava/BlackIn/lighthouse-main
pnpm --filter server dev
```

Terminal B:

```bash
cd /Users/ayushsrivastava/BlackIn/lighthouse-main
pnpm --filter socket dev
```

Terminal C:

```bash
cd /Users/ayushsrivastava/BlackIn/lighthouse-club
pnpm --filter web dev
```

## 3) Quick validation

- Backend listens on `8787`
- Socket listens on `8282`
- Frontend serves on `3000`
- `POST /generate` stream reaches `END`

## 4) CRE status checks

```bash
cre version
cre whoami
cre account access
cre account list-key
```

Expected while pending:

- account exists and CLI works
- deploy access status remains `Not enabled`
- linked owners may be empty

## 5) What becomes available after approval

After Chainlink enables deploy access:

1. configure `SERVER_CRE_API_KEY`
2. configure `SERVER_CRE_ETH_PRIVATE_KEY` or `SERVER_BASE_DEPLOYER_PRIVATE_KEY`
3. run `cre account link-key --target production-settings`
4. rerun CRE health and deployment smoke
