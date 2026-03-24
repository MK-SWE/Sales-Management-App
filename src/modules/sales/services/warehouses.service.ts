import { prisma } from '../../../infrastructure/db/prisma';

export async function createWarehouse(data: { code: string; name: string; location?: string }) {
  return prisma.warehouse.create({ data });
}
