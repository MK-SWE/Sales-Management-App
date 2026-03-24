import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  price: z.literal(true).optional(),
  compareAtPrice: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  reorderStock: z.literal(true).optional()
}).strict();
export const ProductVariantSumAggregateInputObjectSchema: z.ZodType<Prisma.ProductVariantSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantSumAggregateInputType>;
export const ProductVariantSumAggregateInputObjectZodSchema = makeSchema();
