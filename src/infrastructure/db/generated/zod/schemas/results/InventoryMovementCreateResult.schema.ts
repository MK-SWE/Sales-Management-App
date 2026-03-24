import * as z from 'zod';
export const InventoryMovementCreateResultSchema = z.object({
  id: z.string(),
  warehouseId: z.string(),
  variantId: z.string(),
  type: z.unknown(),
  quantity: z.number(),
  referenceId: z.string().optional(),
  referenceType: z.unknown().optional(),
  createdByUserId: z.string().optional(),
  happenedAt: z.date(),
  createdAt: z.date(),
  warehouse: z.unknown(),
  variant: z.unknown(),
  createdByUser: z.unknown().optional()
});