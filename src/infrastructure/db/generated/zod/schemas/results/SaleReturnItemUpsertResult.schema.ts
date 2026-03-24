import * as z from 'zod';
export const SaleReturnItemUpsertResultSchema = z.object({
  id: z.string(),
  saleReturnId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  refundPrice: z.number(),
  lineTotal: z.number(),
  saleReturn: z.unknown(),
  variant: z.unknown()
});