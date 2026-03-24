import * as z from 'zod';
export const SaleReturnItemFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  saleReturnId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  refundPrice: z.number(),
  lineTotal: z.number(),
  saleReturn: z.unknown(),
  variant: z.unknown()
}));