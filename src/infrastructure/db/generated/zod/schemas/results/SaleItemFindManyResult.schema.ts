import * as z from 'zod';
export const SaleItemFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});