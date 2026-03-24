import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  saleId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  productNameSnapshot: z.literal(true).optional(),
  skuSnapshot: z.literal(true).optional(),
  attributesSnapshot: z.literal(true).optional(),
  listPrice: z.literal(true).optional(),
  unitPrice: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  lineTotal: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SaleItemCountAggregateInputObjectSchema: z.ZodType<Prisma.SaleItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCountAggregateInputType>;
export const SaleItemCountAggregateInputObjectZodSchema = makeSchema();
