import { prisma } from '../../../infrastructure/db/prisma';

export async function searchProductVariants(query: string) {
  return prisma.productVariant.findMany({
    where: {
      isActive: true,
      OR: [
        { SKU: { contains: query, mode: 'insensitive' } },
        { product: { productName: { contains: query, mode: 'insensitive' } } }
      ]
    },
    include: { product: true },
    take: 20,
  });
}
