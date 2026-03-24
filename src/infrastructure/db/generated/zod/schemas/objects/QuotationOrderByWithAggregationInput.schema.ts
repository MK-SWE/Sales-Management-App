import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuotationCountOrderByAggregateInputObjectSchema as QuotationCountOrderByAggregateInputObjectSchema } from './QuotationCountOrderByAggregateInput.schema';
import { QuotationMaxOrderByAggregateInputObjectSchema as QuotationMaxOrderByAggregateInputObjectSchema } from './QuotationMaxOrderByAggregateInput.schema';
import { QuotationMinOrderByAggregateInputObjectSchema as QuotationMinOrderByAggregateInputObjectSchema } from './QuotationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => QuotationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QuotationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QuotationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QuotationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QuotationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationOrderByWithAggregationInput>;
export const QuotationOrderByWithAggregationInputObjectZodSchema = makeSchema();
