import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  subtotal: z.literal(true).optional(),
  grandTotal: z.literal(true).optional(),
  amountPaid: z.literal(true).optional(),
  amountDue: z.literal(true).optional()
}).strict();
export const SaleSumAggregateInputObjectSchema: z.ZodType<Prisma.SaleSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleSumAggregateInputType>;
export const SaleSumAggregateInputObjectZodSchema = makeSchema();
