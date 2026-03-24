import * as z from 'zod';
// prettier-ignore
export const SaleReturnItemModelSchema = z.object({
    id: z.string(),
    saleReturnId: z.string(),
    variantId: z.string(),
    quantity: z.number(),
    refundPrice: z.number(),
    lineTotal: z.number(),
    saleReturn: z.unknown(),
    variant: z.unknown()
}).strict();

export type SaleReturnItemPureType = z.infer<typeof SaleReturnItemModelSchema>;
