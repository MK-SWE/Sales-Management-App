import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  subtotal: z.literal(true).optional(),
  grandTotal: z.literal(true).optional()
}).strict();
export const SaleReturnAvgAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnAvgAggregateInputType>;
export const SaleReturnAvgAggregateInputObjectZodSchema = makeSchema();
