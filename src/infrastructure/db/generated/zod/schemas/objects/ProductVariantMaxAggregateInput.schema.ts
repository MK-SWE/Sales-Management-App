import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  SKU: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  price: z.literal(true).optional(),
  compareAtPrice: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  reorderStock: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProductVariantMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductVariantMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantMaxAggregateInputType>;
export const ProductVariantMaxAggregateInputObjectZodSchema = makeSchema();
