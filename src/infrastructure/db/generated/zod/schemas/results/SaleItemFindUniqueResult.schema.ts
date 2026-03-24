import * as z from 'zod';
export const SaleItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  saleId: z.string(),
  variantId: z.string(),
  productNameSnapshot: z.string(),
  skuSnapshot: z.string().optional(),
  attributesSnapshot: z.unknown().optional(),
  listPrice: z.number(),
  unitPrice: z.number(),
  quantity: z.number(),
  lineTotal: z.number(),
  sale: z.unknown(),
  variant: z.unknown()
}));