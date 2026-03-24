import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CategoryNullableScalarRelationFilterObjectSchema as CategoryNullableScalarRelationFilterObjectSchema } from './CategoryNullableScalarRelationFilter.schema';
import { CategoryListRelationFilterObjectSchema as CategoryListRelationFilterObjectSchema } from './CategoryListRelationFilter.schema';
import { ProductListRelationFilterObjectSchema as ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema'

const categorywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoryWhereInputObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoryWhereInputObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parentCategoryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  parentCategory: z.union([z.lazy(() => CategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  children: z.lazy(() => CategoryListRelationFilterObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductListRelationFilterObjectSchema).optional()
}).strict();
export const CategoryWhereInputObjectSchema: z.ZodType<Prisma.CategoryWhereInput> = categorywhereinputSchema as unknown as z.ZodType<Prisma.CategoryWhereInput>;
export const CategoryWhereInputObjectZodSchema = categorywhereinputSchema;
