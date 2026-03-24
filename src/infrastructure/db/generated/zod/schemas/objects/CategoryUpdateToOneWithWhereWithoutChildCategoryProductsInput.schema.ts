import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryUpdateWithoutChildCategoryProductsInputObjectSchema as CategoryUpdateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUpdateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedUpdateWithoutChildCategoryProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoryUpdateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema)])
}).strict();
export const CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInput>;
export const CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
