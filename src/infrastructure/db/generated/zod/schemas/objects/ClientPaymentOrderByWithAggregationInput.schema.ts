import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientPaymentCountOrderByAggregateInputObjectSchema as ClientPaymentCountOrderByAggregateInputObjectSchema } from './ClientPaymentCountOrderByAggregateInput.schema';
import { ClientPaymentAvgOrderByAggregateInputObjectSchema as ClientPaymentAvgOrderByAggregateInputObjectSchema } from './ClientPaymentAvgOrderByAggregateInput.schema';
import { ClientPaymentMaxOrderByAggregateInputObjectSchema as ClientPaymentMaxOrderByAggregateInputObjectSchema } from './ClientPaymentMaxOrderByAggregateInput.schema';
import { ClientPaymentMinOrderByAggregateInputObjectSchema as ClientPaymentMinOrderByAggregateInputObjectSchema } from './ClientPaymentMinOrderByAggregateInput.schema';
import { ClientPaymentSumOrderByAggregateInputObjectSchema as ClientPaymentSumOrderByAggregateInputObjectSchema } from './ClientPaymentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  paymentNumber: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ClientPaymentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClientPaymentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClientPaymentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClientPaymentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClientPaymentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClientPaymentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClientPaymentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentOrderByWithAggregationInput>;
export const ClientPaymentOrderByWithAggregationInputObjectZodSchema = makeSchema();
