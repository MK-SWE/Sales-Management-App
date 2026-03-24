import * as z from 'zod';
// prettier-ignore
export const InventoryTransferItemResultSchema = z.object({
    id: z.string(),
    transferId: z.string(),
    variantId: z.string(),
    quantity: z.number(),
    transfer: z.unknown(),
    variant: z.unknown()
}).strict();

export type InventoryTransferItemResultType = z.infer<typeof InventoryTransferItemResultSchema>;
