import * as z from 'zod';
// prettier-ignore
export const SaleItemModelSchema = z.object({
    id: z.string(),
    saleId: z.string(),
    variantId: z.string(),
    productNameSnapshot: z.string(),
    skuSnapshot: z.string().nullable(),
    attributesSnapshot: z.unknown().nullable(),
    listPrice: z.number(),
    unitPrice: z.number(),
    quantity: z.number(),
    lineTotal: z.number(),
    sale: z.unknown(),
    variant: z.unknown()
}).strict();

export type SaleItemPureType = z.infer<typeof SaleItemModelSchema>;
