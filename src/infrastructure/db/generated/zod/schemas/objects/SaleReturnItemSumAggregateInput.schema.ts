import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional(),
  refundPrice: z.literal(true).optional(),
  lineTotal: z.literal(true).optional()
}).strict();
export const SaleReturnItemSumAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemSumAggregateInputType>;
export const SaleReturnItemSumAggregateInputObjectZodSchema = makeSchema();
