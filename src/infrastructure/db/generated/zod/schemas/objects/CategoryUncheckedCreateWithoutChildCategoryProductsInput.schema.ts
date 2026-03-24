import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { CategoryUncheckedCreateNestedManyWithoutParentCategoryInputObjectSchema as CategoryUncheckedCreateNestedManyWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutParentCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  parentCategoryId: z.string().optional().nullable(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  children: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentCategoryInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutChildCategoryProductsInput>;
export const CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
