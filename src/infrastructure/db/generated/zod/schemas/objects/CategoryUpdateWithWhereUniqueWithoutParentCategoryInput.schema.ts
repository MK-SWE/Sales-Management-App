import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutParentCategoryInputObjectSchema as CategoryUpdateWithoutParentCategoryInputObjectSchema } from './CategoryUpdateWithoutParentCategoryInput.schema';
import { CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema as CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedUpdateWithoutParentCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CategoryUpdateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema)])
}).strict();
export const CategoryUpdateWithWhereUniqueWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;
export const CategoryUpdateWithWhereUniqueWithoutParentCategoryInputObjectZodSchema = makeSchema();
