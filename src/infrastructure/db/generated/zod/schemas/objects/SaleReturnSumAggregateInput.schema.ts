import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  subtotal: z.literal(true).optional(),
  grandTotal: z.literal(true).optional()
}).strict();
export const SaleReturnSumAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnSumAggregateInputType>;
export const SaleReturnSumAggregateInputObjectZodSchema = makeSchema();
