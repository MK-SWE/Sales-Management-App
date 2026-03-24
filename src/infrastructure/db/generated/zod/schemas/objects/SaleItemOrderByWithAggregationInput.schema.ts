import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SaleItemCountOrderByAggregateInputObjectSchema as SaleItemCountOrderByAggregateInputObjectSchema } from './SaleItemCountOrderByAggregateInput.schema';
import { SaleItemAvgOrderByAggregateInputObjectSchema as SaleItemAvgOrderByAggregateInputObjectSchema } from './SaleItemAvgOrderByAggregateInput.schema';
import { SaleItemMaxOrderByAggregateInputObjectSchema as SaleItemMaxOrderByAggregateInputObjectSchema } from './SaleItemMaxOrderByAggregateInput.schema';
import { SaleItemMinOrderByAggregateInputObjectSchema as SaleItemMinOrderByAggregateInputObjectSchema } from './SaleItemMinOrderByAggregateInput.schema';
import { SaleItemSumOrderByAggregateInputObjectSchema as SaleItemSumOrderByAggregateInputObjectSchema } from './SaleItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  productNameSnapshot: SortOrderSchema.optional(),
  skuSnapshot: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attributesSnapshot: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  listPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional(),
  _count: z.lazy(() => SaleItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SaleItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SaleItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SaleItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SaleItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SaleItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SaleItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemOrderByWithAggregationInput>;
export const SaleItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
