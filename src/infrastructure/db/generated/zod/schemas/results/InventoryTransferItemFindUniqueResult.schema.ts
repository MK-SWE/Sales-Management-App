import * as z from 'zod';
export const InventoryTransferItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  transferId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  transfer: z.unknown(),
  variant: z.unknown()
}));