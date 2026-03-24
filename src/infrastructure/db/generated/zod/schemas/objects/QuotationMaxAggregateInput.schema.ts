import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const QuotationMaxAggregateInputObjectSchema: z.ZodType<Prisma.QuotationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuotationMaxAggregateInputType>;
export const QuotationMaxAggregateInputObjectZodSchema = makeSchema();
