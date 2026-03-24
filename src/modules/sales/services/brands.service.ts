import { prisma } from '../../../infrastructure/db/prisma';

export async function createBrand(data: { name: string; description?: string }) {
  return prisma.brand.create({ data });
}
