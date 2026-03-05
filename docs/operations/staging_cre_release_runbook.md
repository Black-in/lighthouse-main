# Staging CRE Release Runbook

This runbook defines the minimum evidence required before promoting a release candidate to production.

## 1) Required staging secrets/env

Configure these in staging before running `staging-cre-e2e`:

- `SERVER_CRE_API_KEY`
- `SERVER_CRE_ETH_PRIVATE_KEY` or `SERVER_BASE_DEPLOYER_PRIVATE_KEY`
- `SERVER_ETHEREUM_MAINNET_RPC_URL`
- `SERVER_CRE_MIN_MAINNET_BALANCE_WEI`
- `SERVER_ADMIN_SECRET`

GitHub Actions secrets required by `.github/workflows/staging-cre-e2e.yml`:

- `STAGING_API_BASE_URL`
- `STAGING_SMOKE_AUTH_TOKEN`
- `STAGING_ADMIN_SECRET`
- `STAGING_SMOKE_PROMPT`

## 2) Release candidate flow

1. Push release candidate commit to `release/*` (or `rc/*`).
2. Deploy that exact commit SHA to staging.
3. Wait for `staging-cre-e2e` workflow to pass for the same commit SHA.
4. Collect and attach workflow artifact `staging-cre-e2e-<run_id>`.

## 3) Evidence checklist per run

The artifact JSON must include:

- `contractId`
- `latestDeployment.txSignature`
- `contractAddress`
- `programId`
- `workflowId`
- `latestDeployment.status=success`

If any field is missing or `status` is not `success`, treat the run as failed.

## 4) Promotion gate

Do not promote to production unless all are true:

- Latest release candidate SHA is deployed in staging.
- `staging-cre-e2e` is green for that same SHA.
- At least 5 consecutive smoke runs succeeded in staging (recommended soak target).
