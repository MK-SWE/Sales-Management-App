import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BrandNullableScalarRelationFilterObjectSchema as BrandNullableScalarRelationFilterObjectSchema } from './BrandNullableScalarRelationFilter.schema';
import { BrandWhereInputObjectSchema as BrandWhereInputObjectSchema } from './BrandWhereInput.schema';
import { CategoryScalarRelationFilterObjectSchema as CategoryScalarRelationFilterObjectSchema } from './CategoryScalarRelationFilter.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { ProductVariantListRelationFilterObjectSchema as ProductVariantListRelationFilterObjectSchema } from './ProductVariantListRelationFilter.schema'

const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productFeatures: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  productDescription: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productImages: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  productCadDrawing: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  productCatalogue: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  productVideos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  childCategoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  brandId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  brand: z.union([z.lazy(() => BrandNullableScalarRelationFilterObjectSchema), z.lazy(() => BrandWhereInputObjectSchema)]).optional(),
  childCategory: z.union([z.lazy(() => CategoryScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  productVariants: z.lazy(() => ProductVariantListRelationFilterObjectSchema).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
