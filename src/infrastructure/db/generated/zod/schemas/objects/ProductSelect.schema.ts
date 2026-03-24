import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandArgsObjectSchema as BrandArgsObjectSchema } from './BrandArgs.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { ProductVariantFindManySchema as ProductVariantFindManySchema } from '../findManyProductVariant.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  productName: z.boolean().optional(),
  productFeatures: z.boolean().optional(),
  productDescription: z.boolean().optional(),
  productImages: z.boolean().optional(),
  productCadDrawing: z.boolean().optional(),
  productCatalogue: z.boolean().optional(),
  productVideos: z.boolean().optional(),
  childCategoryId: z.boolean().optional(),
  tags: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  brandId: z.boolean().optional(),
  brand: z.union([z.boolean(), z.lazy(() => BrandArgsObjectSchema)]).optional(),
  childCategory: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  productVariants: z.union([z.boolean(), z.lazy(() => ProductVariantFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectZodSchema = makeSchema();
