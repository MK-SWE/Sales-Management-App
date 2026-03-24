import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateproductFeaturesInputObjectSchema as ProductUpdateproductFeaturesInputObjectSchema } from './ProductUpdateproductFeaturesInput.schema';
import { ProductUpdateproductImagesInputObjectSchema as ProductUpdateproductImagesInputObjectSchema } from './ProductUpdateproductImagesInput.schema';
import { ProductUpdateproductCadDrawingInputObjectSchema as ProductUpdateproductCadDrawingInputObjectSchema } from './ProductUpdateproductCadDrawingInput.schema';
import { ProductUpdateproductCatalogueInputObjectSchema as ProductUpdateproductCatalogueInputObjectSchema } from './ProductUpdateproductCatalogueInput.schema';
import { ProductUpdateproductVideosInputObjectSchema as ProductUpdateproductVideosInputObjectSchema } from './ProductUpdateproductVideosInput.schema';
import { ProductUpdatetagsInputObjectSchema as ProductUpdatetagsInputObjectSchema } from './ProductUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductVariantUncheckedUpdateManyWithoutProductNestedInputObjectSchema as ProductVariantUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ProductVariantUncheckedUpdateManyWithoutProductNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productFeatures: z.union([z.lazy(() => ProductUpdateproductFeaturesInputObjectSchema), z.string().array()]).optional(),
  productDescription: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productImages: z.union([z.lazy(() => ProductUpdateproductImagesInputObjectSchema), z.string().array()]).optional(),
  productCadDrawing: z.union([z.lazy(() => ProductUpdateproductCadDrawingInputObjectSchema), z.string().array()]).optional(),
  productCatalogue: z.union([z.lazy(() => ProductUpdateproductCatalogueInputObjectSchema), z.string().array()]).optional(),
  productVideos: z.union([z.lazy(() => ProductUpdateproductVideosInputObjectSchema), z.string().array()]).optional(),
  tags: z.union([z.lazy(() => ProductUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  brandId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productVariants: z.lazy(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedUpdateWithoutChildCategoryInput>;
export const ProductUncheckedUpdateWithoutChildCategoryInputObjectZodSchema = makeSchema();
