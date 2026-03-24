const PRODUCTION_BUILD_PHASE = 'phase-production-build';

function isProductionBuildPhase() {
  return process.env.NEXT_PHASE === PRODUCTION_BUILD_PHASE;
}

export function isProductionRuntime() {
  return process.env.NODE_ENV === 'production' && !isProductionBuildPhase();
}

export function requireRuntimeEnv(name: string) {
  const value = process.env[name];

  if (value) {
    return value;
  }

  if (isProductionRuntime()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return undefined;
}

export function resolveRuntimeURL(name: string) {
  const value = process.env[name];

  if (!value) {
    if (isProductionRuntime()) {
      throw new Error(`Missing required environment variable: ${name}`);
    }

    return undefined;
  }

  try {
    return new URL(value).toString().replace(/\/$/, '');
  } catch {
    throw new Error(`Environment variable ${name} must be a valid absolute URL`);
  }
}
