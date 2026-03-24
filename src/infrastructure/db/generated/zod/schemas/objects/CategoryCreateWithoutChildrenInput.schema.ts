import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { CategoryCreateNestedOneWithoutChildrenInputObjectSchema as CategoryCreateNestedOneWithoutChildrenInputObjectSchema } from './CategoryCreateNestedOneWithoutChildrenInput.schema';
import { ProductCreateNestedManyWithoutChildCategoryInputObjectSchema as ProductCreateNestedManyWithoutChildCategoryInputObjectSchema } from './ProductCreateNestedManyWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductCreateNestedManyWithoutChildCategoryInputObjectSchema).optional()
}).strict();
export const CategoryCreateWithoutChildrenInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutChildrenInput>;
export const CategoryCreateWithoutChildrenInputObjectZodSchema = makeSchema();
