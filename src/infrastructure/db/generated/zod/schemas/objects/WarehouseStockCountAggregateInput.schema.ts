import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  warehouseId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WarehouseStockCountAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCountAggregateInputType>;
export const WarehouseStockCountAggregateInputObjectZodSchema = makeSchema();
