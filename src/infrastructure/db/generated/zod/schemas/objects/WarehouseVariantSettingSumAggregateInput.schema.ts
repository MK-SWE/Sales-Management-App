import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reorderStock: z.literal(true).optional()
}).strict();
export const WarehouseVariantSettingSumAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingSumAggregateInputType>;
export const WarehouseVariantSettingSumAggregateInputObjectZodSchema = makeSchema();
