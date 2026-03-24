import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WarehouseCountOrderByAggregateInputObjectSchema as WarehouseCountOrderByAggregateInputObjectSchema } from './WarehouseCountOrderByAggregateInput.schema';
import { WarehouseMaxOrderByAggregateInputObjectSchema as WarehouseMaxOrderByAggregateInputObjectSchema } from './WarehouseMaxOrderByAggregateInput.schema';
import { WarehouseMinOrderByAggregateInputObjectSchema as WarehouseMinOrderByAggregateInputObjectSchema } from './WarehouseMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  location: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WarehouseCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WarehouseMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WarehouseMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WarehouseOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WarehouseOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseOrderByWithAggregationInput>;
export const WarehouseOrderByWithAggregationInputObjectZodSchema = makeSchema();
