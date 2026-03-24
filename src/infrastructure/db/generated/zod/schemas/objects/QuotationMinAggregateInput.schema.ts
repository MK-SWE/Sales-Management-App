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
export const QuotationMinAggregateInputObjectSchema: z.ZodType<Prisma.QuotationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuotationMinAggregateInputType>;
export const QuotationMinAggregateInputObjectZodSchema = makeSchema();
