import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { ProductUncheckedCreateNestedManyWithoutChildCategoryInputObjectSchema as ProductUncheckedCreateNestedManyWithoutChildCategoryInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  parentCategoryId: z.string().optional().nullable(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  childCategoryProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutChildCategoryInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedCreateWithoutChildrenInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutChildrenInput>;
export const CategoryUncheckedCreateWithoutChildrenInputObjectZodSchema = makeSchema();
