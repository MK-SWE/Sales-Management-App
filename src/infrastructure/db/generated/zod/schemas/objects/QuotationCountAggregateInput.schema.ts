import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const QuotationCountAggregateInputObjectSchema: z.ZodType<Prisma.QuotationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCountAggregateInputType>;
export const QuotationCountAggregateInputObjectZodSchema = makeSchema();
