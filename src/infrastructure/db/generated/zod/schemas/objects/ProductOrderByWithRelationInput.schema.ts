import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BrandOrderByWithRelationInputObjectSchema as BrandOrderByWithRelationInputObjectSchema } from './BrandOrderByWithRelationInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { ProductVariantOrderByRelationAggregateInputObjectSchema as ProductVariantOrderByRelationAggregateInputObjectSchema } from './ProductVariantOrderByRelationAggregateInput.schema'

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
  brandId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  brand: z.lazy(() => BrandOrderByWithRelationInputObjectSchema).optional(),
  childCategory: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
  productVariants: z.lazy(() => ProductVariantOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
