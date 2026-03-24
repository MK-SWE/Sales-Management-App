import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const ClientPaymentSumAggregateInputObjectSchema: z.ZodType<Prisma.ClientPaymentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentSumAggregateInputType>;
export const ClientPaymentSumAggregateInputObjectZodSchema = makeSchema();
