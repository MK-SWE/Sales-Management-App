import * as z from 'zod';
export const InventoryTransferCreateResultSchema = z.object({
  id: z.string(),
  transferNumber: z.string(),
  sourceWarehouseId: z.string(),
  destWarehouseId: z.string(),
  status: z.unknown(),
  notes: z.string().optional(),
  createdByUserId: z.string().optional(),
  transferredAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sourceWarehouse: z.unknown(),
  destWarehouse: z.unknown(),
  createdByUser: z.unknown().optional(),
  items: z.array(z.unknown())
});