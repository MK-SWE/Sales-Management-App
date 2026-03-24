import * as z from 'zod';
export const InventoryTransferItemUpsertResultSchema = z.object({
  id: z.string(),
  transferId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  transfer: z.unknown(),
  variant: z.unknown()
});