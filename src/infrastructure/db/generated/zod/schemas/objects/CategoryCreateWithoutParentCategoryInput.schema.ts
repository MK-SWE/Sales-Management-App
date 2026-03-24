import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema as CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema } from './CategoryCreateNestedManyWithoutParentCategoryInput.schema';
import { ProductCreateNestedManyWithoutChildCategoryInputObjectSchema as ProductCreateNestedManyWithoutChildCategoryInputObjectSchema } from './ProductCreateNestedManyWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductCreateNestedManyWithoutChildCategoryInputObjectSchema).optional()
}).strict();
export const CategoryCreateWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutParentCategoryInput>;
export const CategoryCreateWithoutParentCategoryInputObjectZodSchema = makeSchema();
