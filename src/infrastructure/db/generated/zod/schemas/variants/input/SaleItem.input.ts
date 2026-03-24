import * as z from 'zod';
// prettier-ignore
export const SaleItemInputSchema = z.object({
    id: z.string(),
    saleId: z.string(),
    variantId: z.string(),
    productNameSnapshot: z.string(),
    skuSnapshot: z.string().optional().nullable(),
    attributesSnapshot: z.unknown().optional().nullable(),
    listPrice: z.number(),
    unitPrice: z.number(),
    quantity: z.number(),
    lineTotal: z.number(),
    sale: z.unknown(),
    variant: z.unknown()
}).strict();

export type SaleItemInputType = z.infer<typeof SaleItemInputSchema>;
