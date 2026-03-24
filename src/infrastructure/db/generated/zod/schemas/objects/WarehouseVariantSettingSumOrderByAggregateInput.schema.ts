import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  reorderStock: SortOrderSchema.optional()
}).strict();
export const WarehouseVariantSettingSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingSumOrderByAggregateInput>;
export const WarehouseVariantSettingSumOrderByAggregateInputObjectZodSchema = makeSchema();
