import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional(),
  refundPrice: z.literal(true).optional(),
  lineTotal: z.literal(true).optional()
}).strict();
export const SaleReturnItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemAvgAggregateInputType>;
export const SaleReturnItemAvgAggregateInputObjectZodSchema = makeSchema();
