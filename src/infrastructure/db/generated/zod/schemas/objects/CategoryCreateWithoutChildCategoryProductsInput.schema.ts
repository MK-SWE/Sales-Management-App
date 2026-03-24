import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { CategoryCreateNestedOneWithoutChildrenInputObjectSchema as CategoryCreateNestedOneWithoutChildrenInputObjectSchema } from './CategoryCreateNestedOneWithoutChildrenInput.schema';
import { CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema as CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema } from './CategoryCreateNestedManyWithoutParentCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema).optional()
}).strict();
export const CategoryCreateWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutChildCategoryProductsInput>;
export const CategoryCreateWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
