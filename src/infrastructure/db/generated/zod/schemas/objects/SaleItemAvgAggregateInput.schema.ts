import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  listPrice: z.literal(true).optional(),
  unitPrice: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  lineTotal: z.literal(true).optional()
}).strict();
export const SaleItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.SaleItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemAvgAggregateInputType>;
export const SaleItemAvgAggregateInputObjectZodSchema = makeSchema();
