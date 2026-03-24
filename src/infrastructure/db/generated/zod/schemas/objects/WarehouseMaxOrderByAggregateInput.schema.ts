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
export const WarehouseMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseMaxOrderByAggregateInput>;
export const WarehouseMaxOrderByAggregateInputObjectZodSchema = makeSchema();
