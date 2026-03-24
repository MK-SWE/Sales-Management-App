import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  paymentNumber: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  paymentDate: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ClientPaymentMinAggregateInputObjectSchema: z.ZodType<Prisma.ClientPaymentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentMinAggregateInputType>;
export const ClientPaymentMinAggregateInputObjectZodSchema = makeSchema();
