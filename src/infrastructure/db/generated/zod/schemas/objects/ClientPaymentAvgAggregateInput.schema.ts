import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const ClientPaymentAvgAggregateInputObjectSchema: z.ZodType<Prisma.ClientPaymentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentAvgAggregateInputType>;
export const ClientPaymentAvgAggregateInputObjectZodSchema = makeSchema();
