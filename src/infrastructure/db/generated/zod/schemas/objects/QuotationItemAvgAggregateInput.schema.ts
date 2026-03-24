import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const QuotationItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.QuotationItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemAvgAggregateInputType>;
export const QuotationItemAvgAggregateInputObjectZodSchema = makeSchema();
