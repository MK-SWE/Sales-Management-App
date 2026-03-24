import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { requireRuntimeEnv, resolveRuntimeURL } from '@/lib/env';
import { prisma } from '@/src/infrastructure/db/prisma';

function resolveAuthBaseURL() {
  return (
    resolveRuntimeURL('BETTER_AUTH_URL') ??
    resolveRuntimeURL('NEXT_PUBLIC_BETTER_AUTH_URL') ??
    resolveRuntimeURL('APP_URL') ??
    resolveRuntimeURL('NEXT_PUBLIC_APP_URL') ??
    'http://localhost:3000'
  );
}

function resolveAuthSecret() {
  const secret = requireRuntimeEnv('BETTER_AUTH_SECRET') ?? requireRuntimeEnv('AUTH_SECRET');

  if (secret) {
    return secret;
  }

  // Local build/dev fallback only. Production must provide BETTER_AUTH_SECRET.
  return 'build-and-dev-fallback-secret-change-me';
}

const baseURL = resolveAuthBaseURL();

export const auth = betterAuth({
  appName: 'Sales Manager',
  baseURL,
  basePath: '/api/auth',
  secret: resolveAuthSecret(),
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
    transaction: true,
  }),
  trustedOrigins: [baseURL],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});

export type AuthSession = typeof auth.$Infer.Session;
