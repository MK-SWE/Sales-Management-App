import * as z from 'zod';
// prettier-ignore
export const InventoryTransferItemInputSchema = z.object({
    id: z.string(),
    transferId: z.string(),
    variantId: z.string(),
    quantity: z.number(),
    transfer: z.unknown(),
    variant: z.unknown()
}).strict();

export type InventoryTransferItemInputType = z.infer<typeof InventoryTransferItemInputSchema>;
