import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WarehouseMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseMinOrderByAggregateInput>;
export const WarehouseMinOrderByAggregateInputObjectZodSchema = makeSchema();
