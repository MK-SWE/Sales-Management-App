import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  subtotal: z.literal(true).optional(),
  grandTotal: z.literal(true).optional(),
  amountPaid: z.literal(true).optional(),
  amountDue: z.literal(true).optional()
}).strict();
export const SaleAvgAggregateInputObjectSchema: z.ZodType<Prisma.SaleAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleAvgAggregateInputType>;
export const SaleAvgAggregateInputObjectZodSchema = makeSchema();
