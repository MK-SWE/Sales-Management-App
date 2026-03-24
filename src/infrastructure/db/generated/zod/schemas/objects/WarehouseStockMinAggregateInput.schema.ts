import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  warehouseId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const WarehouseStockMinAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockMinAggregateInputType>;
export const WarehouseStockMinAggregateInputObjectZodSchema = makeSchema();
