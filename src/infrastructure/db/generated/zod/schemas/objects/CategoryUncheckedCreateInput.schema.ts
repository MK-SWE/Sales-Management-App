import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema';
import { CategoryUncheckedCreateNestedManyWithoutParentCategoryInputObjectSchema as CategoryUncheckedCreateNestedManyWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutParentCategoryInput.schema';
import { ProductUncheckedCreateNestedManyWithoutChildCategoryInputObjectSchema as ProductUncheckedCreateNestedManyWithoutChildCategoryInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  parentCategoryId: z.string().optional().nullable(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  children: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentCategoryInputObjectSchema).optional(),
  childCategoryProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutChildCategoryInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateInput>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
