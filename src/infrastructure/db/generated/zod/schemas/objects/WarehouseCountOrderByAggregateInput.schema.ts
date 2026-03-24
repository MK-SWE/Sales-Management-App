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
export const WarehouseCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCountOrderByAggregateInput>;
export const WarehouseCountOrderByAggregateInputObjectZodSchema = makeSchema();
