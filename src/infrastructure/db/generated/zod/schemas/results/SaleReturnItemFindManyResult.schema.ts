import * as z from 'zod';
export const SaleReturnItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  saleReturnId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  refundPrice: z.number(),
  lineTotal: z.number(),
  saleReturn: z.unknown(),
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