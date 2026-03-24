import { Prisma } from '../../../infrastructure/db/prisma';

const MAX_RETRIES = 3;

export async function withSerializableRetry<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2034' && // Transaction failed due to a write conflict or a deadlock
      retries > 0
    ) {
      // Exponential backoff jitter
      const delay = Math.floor(Math.random() * 100) + 50;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return withSerializableRetry(operation, retries - 1);
    }
    throw error;
  }
}
