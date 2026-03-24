import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productName: SortOrderSchema.optional(),
  productFeatures: SortOrderSchema.optional(),
  productDescription: SortOrderSchema.optional(),
  productImages: SortOrderSchema.optional(),
  productCadDrawing: SortOrderSchema.optional(),
  productCatalogue: SortOrderSchema.optional(),
  productVideos: SortOrderSchema.optional(),
  childCategoryId: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  brandId: SortOrderSchema.optional()
}).strict();
export const ProductCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOrderByAggregateInput>;
export const ProductCountOrderByAggregateInputObjectZodSchema = makeSchema();
