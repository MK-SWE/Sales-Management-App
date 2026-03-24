import * as z from 'zod';
export const WarehouseVariantSettingFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  warehouseId: z.string(),
  variantId: z.string(),
  reorderStock: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  warehouse: z.unknown(),
  variant: z.unknown()
}));