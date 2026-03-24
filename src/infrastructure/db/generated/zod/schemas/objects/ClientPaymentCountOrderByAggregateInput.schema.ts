import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  paymentNumber: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClientPaymentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientPaymentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCountOrderByAggregateInput>;
export const ClientPaymentCountOrderByAggregateInputObjectZodSchema = makeSchema();
