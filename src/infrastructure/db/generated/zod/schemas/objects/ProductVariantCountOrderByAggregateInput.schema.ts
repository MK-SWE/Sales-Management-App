import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  SKU: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  attributes: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  compareAtPrice: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  reorderStock: SortOrderSchema.optional(),
  images: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductVariantCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductVariantCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCountOrderByAggregateInput>;
export const ProductVariantCountOrderByAggregateInputObjectZodSchema = makeSchema();
