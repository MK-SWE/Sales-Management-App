import * as z from 'zod';
export const WarehouseStockFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  warehouseId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  warehouse: z.unknown(),
  variant: z.unknown()
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