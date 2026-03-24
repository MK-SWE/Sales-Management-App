import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  saleReturnId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  refundPrice: z.literal(true).optional(),
  lineTotal: z.literal(true).optional()
}).strict();
export const SaleReturnItemMinAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemMinAggregateInputType>;
export const SaleReturnItemMinAggregateInputObjectZodSchema = makeSchema();
