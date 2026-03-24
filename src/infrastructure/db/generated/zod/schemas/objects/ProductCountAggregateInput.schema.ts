import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productName: z.literal(true).optional(),
  productFeatures: z.literal(true).optional(),
  productDescription: z.literal(true).optional(),
  productImages: z.literal(true).optional(),
  productCadDrawing: z.literal(true).optional(),
  productCatalogue: z.literal(true).optional(),
  productVideos: z.literal(true).optional(),
  childCategoryId: z.literal(true).optional(),
  tags: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  brandId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountAggregateInputType>;
export const ProductCountAggregateInputObjectZodSchema = makeSchema();
