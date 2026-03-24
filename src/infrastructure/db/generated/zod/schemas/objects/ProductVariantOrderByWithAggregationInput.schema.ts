import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductVariantCountOrderByAggregateInputObjectSchema as ProductVariantCountOrderByAggregateInputObjectSchema } from './ProductVariantCountOrderByAggregateInput.schema';
import { ProductVariantAvgOrderByAggregateInputObjectSchema as ProductVariantAvgOrderByAggregateInputObjectSchema } from './ProductVariantAvgOrderByAggregateInput.schema';
import { ProductVariantMaxOrderByAggregateInputObjectSchema as ProductVariantMaxOrderByAggregateInputObjectSchema } from './ProductVariantMaxOrderByAggregateInput.schema';
import { ProductVariantMinOrderByAggregateInputObjectSchema as ProductVariantMinOrderByAggregateInputObjectSchema } from './ProductVariantMinOrderByAggregateInput.schema';
import { ProductVariantSumOrderByAggregateInputObjectSchema as ProductVariantSumOrderByAggregateInputObjectSchema } from './ProductVariantSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  SKU: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  attributes: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  compareAtPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stock: SortOrderSchema.optional(),
  reorderStock: SortOrderSchema.optional(),
  images: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductVariantCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductVariantAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductVariantMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductVariantMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductVariantSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductVariantOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductVariantOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantOrderByWithAggregationInput>;
export const ProductVariantOrderByWithAggregationInputObjectZodSchema = makeSchema();
