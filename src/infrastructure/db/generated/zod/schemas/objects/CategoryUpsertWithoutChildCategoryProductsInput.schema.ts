import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryUpdateWithoutChildCategoryProductsInputObjectSchema as CategoryUpdateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUpdateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedUpdateWithoutChildCategoryProductsInput.schema';
import { CategoryCreateWithoutChildCategoryProductsInputObjectSchema as CategoryCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryCreateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutChildCategoryProductsInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithoutChildCategoryProductsInput>;
export const CategoryUpsertWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
