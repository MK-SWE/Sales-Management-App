import * as z from 'zod';
export const WarehouseStockUpsertResultSchema = z.object({
  id: z.string(),
  warehouseId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  warehouse: z.unknown(),
  variant: z.unknown()
});