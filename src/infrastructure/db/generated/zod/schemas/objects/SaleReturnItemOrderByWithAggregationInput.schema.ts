import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleReturnItemCountOrderByAggregateInputObjectSchema as SaleReturnItemCountOrderByAggregateInputObjectSchema } from './SaleReturnItemCountOrderByAggregateInput.schema';
import { SaleReturnItemAvgOrderByAggregateInputObjectSchema as SaleReturnItemAvgOrderByAggregateInputObjectSchema } from './SaleReturnItemAvgOrderByAggregateInput.schema';
import { SaleReturnItemMaxOrderByAggregateInputObjectSchema as SaleReturnItemMaxOrderByAggregateInputObjectSchema } from './SaleReturnItemMaxOrderByAggregateInput.schema';
import { SaleReturnItemMinOrderByAggregateInputObjectSchema as SaleReturnItemMinOrderByAggregateInputObjectSchema } from './SaleReturnItemMinOrderByAggregateInput.schema';
import { SaleReturnItemSumOrderByAggregateInputObjectSchema as SaleReturnItemSumOrderByAggregateInputObjectSchema } from './SaleReturnItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleReturnId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  refundPrice: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional(),
  _count: z.lazy(() => SaleReturnItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SaleReturnItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SaleReturnItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SaleReturnItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SaleReturnItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SaleReturnItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SaleReturnItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemOrderByWithAggregationInput>;
export const SaleReturnItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
