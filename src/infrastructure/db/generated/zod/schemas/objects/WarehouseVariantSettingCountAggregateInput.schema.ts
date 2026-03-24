import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  warehouseId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  reorderStock: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WarehouseVariantSettingCountAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCountAggregateInputType>;
export const WarehouseVariantSettingCountAggregateInputObjectZodSchema = makeSchema();
