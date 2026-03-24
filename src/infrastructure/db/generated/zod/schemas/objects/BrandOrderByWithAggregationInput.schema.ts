import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BrandCountOrderByAggregateInputObjectSchema as BrandCountOrderByAggregateInputObjectSchema } from './BrandCountOrderByAggregateInput.schema';
import { BrandMaxOrderByAggregateInputObjectSchema as BrandMaxOrderByAggregateInputObjectSchema } from './BrandMaxOrderByAggregateInput.schema';
import { BrandMinOrderByAggregateInputObjectSchema as BrandMinOrderByAggregateInputObjectSchema } from './BrandMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BrandCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BrandMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BrandMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BrandOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BrandOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandOrderByWithAggregationInput>;
export const BrandOrderByWithAggregationInputObjectZodSchema = makeSchema();
