import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { CategoryCreateNestedOneWithoutChildrenInputObjectSchema as CategoryCreateNestedOneWithoutChildrenInputObjectSchema } from './CategoryCreateNestedOneWithoutChildrenInput.schema';
import { CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema as CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema } from './CategoryCreateNestedManyWithoutParentCategoryInput.schema';
import { ProductCreateNestedManyWithoutChildCategoryInputObjectSchema as ProductCreateNestedManyWithoutChildCategoryInputObjectSchema } from './ProductCreateNestedManyWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductCreateNestedManyWithoutChildCategoryInputObjectSchema).optional()
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateInput>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
