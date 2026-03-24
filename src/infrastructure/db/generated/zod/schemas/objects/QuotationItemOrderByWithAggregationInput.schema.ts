import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuotationItemCountOrderByAggregateInputObjectSchema as QuotationItemCountOrderByAggregateInputObjectSchema } from './QuotationItemCountOrderByAggregateInput.schema';
import { QuotationItemAvgOrderByAggregateInputObjectSchema as QuotationItemAvgOrderByAggregateInputObjectSchema } from './QuotationItemAvgOrderByAggregateInput.schema';
import { QuotationItemMaxOrderByAggregateInputObjectSchema as QuotationItemMaxOrderByAggregateInputObjectSchema } from './QuotationItemMaxOrderByAggregateInput.schema';
import { QuotationItemMinOrderByAggregateInputObjectSchema as QuotationItemMinOrderByAggregateInputObjectSchema } from './QuotationItemMinOrderByAggregateInput.schema';
import { QuotationItemSumOrderByAggregateInputObjectSchema as QuotationItemSumOrderByAggregateInputObjectSchema } from './QuotationItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  quotationId: SortOrderSchema.optional(),
  ProductVariantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  snapshotSKU: SortOrderSchema.optional(),
  snapshotAttributes: SortOrderSchema.optional(),
  snapshotImages: SortOrderSchema.optional(),
  snapshotProductName: SortOrderSchema.optional(),
  snapshotProductId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => QuotationItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => QuotationItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QuotationItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QuotationItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => QuotationItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QuotationItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QuotationItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemOrderByWithAggregationInput>;
export const QuotationItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
