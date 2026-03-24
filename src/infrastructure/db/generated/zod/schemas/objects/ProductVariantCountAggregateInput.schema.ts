import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  SKU: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  attributes: z.literal(true).optional(),
  price: z.literal(true).optional(),
  compareAtPrice: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  reorderStock: z.literal(true).optional(),
  images: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductVariantCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductVariantCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCountAggregateInputType>;
export const ProductVariantCountAggregateInputObjectZodSchema = makeSchema();
