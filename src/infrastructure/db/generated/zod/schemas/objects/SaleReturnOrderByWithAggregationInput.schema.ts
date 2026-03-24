import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SaleReturnCountOrderByAggregateInputObjectSchema as SaleReturnCountOrderByAggregateInputObjectSchema } from './SaleReturnCountOrderByAggregateInput.schema';
import { SaleReturnAvgOrderByAggregateInputObjectSchema as SaleReturnAvgOrderByAggregateInputObjectSchema } from './SaleReturnAvgOrderByAggregateInput.schema';
import { SaleReturnMaxOrderByAggregateInputObjectSchema as SaleReturnMaxOrderByAggregateInputObjectSchema } from './SaleReturnMaxOrderByAggregateInput.schema';
import { SaleReturnMinOrderByAggregateInputObjectSchema as SaleReturnMinOrderByAggregateInputObjectSchema } from './SaleReturnMinOrderByAggregateInput.schema';
import { SaleReturnSumOrderByAggregateInputObjectSchema as SaleReturnSumOrderByAggregateInputObjectSchema } from './SaleReturnSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  returnNumber: SortOrderSchema.optional(),
  originalSaleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  warehouseId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  returnedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SaleReturnCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SaleReturnAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SaleReturnMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SaleReturnMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SaleReturnSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SaleReturnOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SaleReturnOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnOrderByWithAggregationInput>;
export const SaleReturnOrderByWithAggregationInputObjectZodSchema = makeSchema();
