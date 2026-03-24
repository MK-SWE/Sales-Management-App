import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SaleCountOrderByAggregateInputObjectSchema as SaleCountOrderByAggregateInputObjectSchema } from './SaleCountOrderByAggregateInput.schema';
import { SaleAvgOrderByAggregateInputObjectSchema as SaleAvgOrderByAggregateInputObjectSchema } from './SaleAvgOrderByAggregateInput.schema';
import { SaleMaxOrderByAggregateInputObjectSchema as SaleMaxOrderByAggregateInputObjectSchema } from './SaleMaxOrderByAggregateInput.schema';
import { SaleMinOrderByAggregateInputObjectSchema as SaleMinOrderByAggregateInputObjectSchema } from './SaleMinOrderByAggregateInput.schema';
import { SaleSumOrderByAggregateInputObjectSchema as SaleSumOrderByAggregateInputObjectSchema } from './SaleSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleNumber: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cashClientName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paymentMethod: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  amountDue: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  soldAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SaleCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SaleAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SaleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SaleMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SaleSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SaleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SaleOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleOrderByWithAggregationInput>;
export const SaleOrderByWithAggregationInputObjectZodSchema = makeSchema();
