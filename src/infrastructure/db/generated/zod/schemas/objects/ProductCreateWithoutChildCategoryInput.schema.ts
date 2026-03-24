import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateproductFeaturesInputObjectSchema as ProductCreateproductFeaturesInputObjectSchema } from './ProductCreateproductFeaturesInput.schema';
import { ProductCreateproductImagesInputObjectSchema as ProductCreateproductImagesInputObjectSchema } from './ProductCreateproductImagesInput.schema';
import { ProductCreateproductCadDrawingInputObjectSchema as ProductCreateproductCadDrawingInputObjectSchema } from './ProductCreateproductCadDrawingInput.schema';
import { ProductCreateproductCatalogueInputObjectSchema as ProductCreateproductCatalogueInputObjectSchema } from './ProductCreateproductCatalogueInput.schema';
import { ProductCreateproductVideosInputObjectSchema as ProductCreateproductVideosInputObjectSchema } from './ProductCreateproductVideosInput.schema';
import { ProductCreatetagsInputObjectSchema as ProductCreatetagsInputObjectSchema } from './ProductCreatetagsInput.schema';
import { BrandCreateNestedOneWithoutProductsInputObjectSchema as BrandCreateNestedOneWithoutProductsInputObjectSchema } from './BrandCreateNestedOneWithoutProductsInput.schema';
import { ProductVariantCreateNestedManyWithoutProductInputObjectSchema as ProductVariantCreateNestedManyWithoutProductInputObjectSchema } from './ProductVariantCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productName: z.string(),
  productFeatures: z.union([z.lazy(() => ProductCreateproductFeaturesInputObjectSchema), z.string().array()]).optional(),
  productDescription: z.string(),
  productImages: z.union([z.lazy(() => ProductCreateproductImagesInputObjectSchema), z.string().array()]).optional(),
  productCadDrawing: z.union([z.lazy(() => ProductCreateproductCadDrawingInputObjectSchema), z.string().array()]).optional(),
  productCatalogue: z.union([z.lazy(() => ProductCreateproductCatalogueInputObjectSchema), z.string().array()]).optional(),
  productVideos: z.union([z.lazy(() => ProductCreateproductVideosInputObjectSchema), z.string().array()]).optional(),
  tags: z.union([z.lazy(() => ProductCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputObjectSchema).optional(),
  productVariants: z.lazy(() => ProductVariantCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutChildCategoryInput>;
export const ProductCreateWithoutChildCategoryInputObjectZodSchema = makeSchema();
