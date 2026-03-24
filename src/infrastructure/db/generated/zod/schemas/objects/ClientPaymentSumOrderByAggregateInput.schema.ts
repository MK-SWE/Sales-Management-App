import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const ClientPaymentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientPaymentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentSumOrderByAggregateInput>;
export const ClientPaymentSumOrderByAggregateInputObjectZodSchema = makeSchema();
