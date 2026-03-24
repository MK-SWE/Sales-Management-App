import * as z from 'zod';
export const WarehouseStockGroupByResultSchema = z.array(z.object({
  id: z.string(),
  warehouseId: z.string(),
  variantId: z.string(),
  quantity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    warehouseId: z.number(),
    variantId: z.number(),
    quantity: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    warehouse: z.number(),
    variant: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    warehouseId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    warehouseId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));