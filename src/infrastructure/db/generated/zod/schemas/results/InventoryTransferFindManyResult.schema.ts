import * as z from 'zod';
export const InventoryTransferFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});