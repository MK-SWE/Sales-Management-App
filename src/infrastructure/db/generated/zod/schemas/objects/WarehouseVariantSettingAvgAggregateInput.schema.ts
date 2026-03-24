import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reorderStock: z.literal(true).optional()
}).strict();
export const WarehouseVariantSettingAvgAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingAvgAggregateInputType>;
export const WarehouseVariantSettingAvgAggregateInputObjectZodSchema = makeSchema();
