import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  reorderStock: SortOrderSchema.optional()
}).strict();
export const WarehouseVariantSettingAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingAvgOrderByAggregateInput>;
export const WarehouseVariantSettingAvgOrderByAggregateInputObjectZodSchema = makeSchema();
