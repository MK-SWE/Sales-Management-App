import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  amountDue: SortOrderSchema.optional()
}).strict();
export const SaleSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleSumOrderByAggregateInput>;
export const SaleSumOrderByAggregateInputObjectZodSchema = makeSchema();
