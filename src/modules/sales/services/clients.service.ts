import { prisma, Decimal } from '../../../infrastructure/db/prisma';
import { CreateClientSchema } from '../schemas/client.schemas';
import { z } from 'zod';

export async function createClient(input: z.infer<typeof CreateClientSchema>) {
  return prisma.client.create({
    data: {
      code: input.code,
      name: input.name,
      isOpenAccountEnabled: input.isOpenAccountEnabled,
      creditLimit: input.creditLimit ? new Decimal(input.creditLimit) : null,
      contactInfo: input.contactInfo,
    }
  });
}
