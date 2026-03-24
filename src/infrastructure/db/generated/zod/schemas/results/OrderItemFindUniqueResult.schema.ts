import * as z from 'zod';
export const OrderItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  orderId: z.string(),
  order: z.unknown(),
  ProductVariantId: z.string(),
  ProductVariant: z.unknown(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  snapshotSKU: z.string(),
  snapshotAttributes: z.unknown(),
  snapshotImages: z.array(z.string()),
  snapshotProductName: z.string(),
  snapshotProductId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));