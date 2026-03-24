# Sales Manager

Internal sales and inventory management app built with Next.js, TypeScript, Prisma, PostgreSQL, and Better Auth.

## Prerequisites

- Node.js 20+
- PostgreSQL

## Environment

Copy `.env.example` to `.env.local` or `.env` and set:

- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL` or `APP_URL`

Notes:

- `BETTER_AUTH_SECRET` must be a real secret outside local development.
- `BETTER_AUTH_URL` should match the deployed app URL in non-local environments.
- `BETTER_AUTH_URL` and `APP_URL` must be valid absolute URLs when set.
- `lib/auth.ts` contains a build/dev fallback secret only so local builds do not fail when env is missing. Do not rely on that in production.
- Production runtime fails fast if `DATABASE_URL`, `BETTER_AUTH_SECRET`, or required auth URLs are missing.

## Install

```bash
npm install
npx prisma generate
```

## Database Setup

Apply your normal Prisma schema workflow against the target database:

```bash
npx prisma db push
```

Or use your migration command if you manage schema changes through migrations.

Recommended production order:

1. Set production environment variables.
2. Run `npx prisma generate`.
3. Apply schema or migrations to the target database.
4. Start the app only after the database step succeeds.

## Seed Bootstrap Data

Bootstrap sample internal-tool data with:

```bash
npx prisma db seed
```

The seed includes:

- sample warehouses
- sample brands
- sample clients
- sample products and variants
- opening stock balances
- sample sales
- sample sales returns
- sample inventory transfers
- sample client payments

Use seed data only for local, QA, or controlled staging environments unless the business explicitly wants demo/bootstrap records in production.

## Run Locally

```bash
npm run dev
```

## Validation

```bash
npm test
npm run typecheck
yarn lint
yarn build
```

## Deployment Checklist

1. Set `DATABASE_URL`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL` or `APP_URL`.
2. Run `npm install`.
3. Run `npx prisma generate`.
4. Apply schema changes with your approved Prisma workflow.
5. Optionally run `npx prisma db seed` in non-production environments.
6. Run `npm test`.
7. Run `npm run typecheck`.
8. Run `yarn lint`.
9. Run `yarn build`.
10. Deploy and do a manual smoke pass for sales, returns, transfers, payments, and reports.

## Auth

Better Auth is wired through:

- `lib/auth.ts`
- `app/api/auth/[...all]/route.ts`

This repo does not use `next-auth`.
