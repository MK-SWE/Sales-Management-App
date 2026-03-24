import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutParentCategoryInputObjectSchema as CategoryUpdateWithoutParentCategoryInputObjectSchema } from './CategoryUpdateWithoutParentCategoryInput.schema';
import { CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema as CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedUpdateWithoutParentCategoryInput.schema';
import { CategoryCreateWithoutParentCategoryInputObjectSchema as CategoryCreateWithoutParentCategoryInputObjectSchema } from './CategoryCreateWithoutParentCategoryInput.schema';
import { CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema as CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedCreateWithoutParentCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CategoryUpdateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutParentCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema)])
}).strict();
export const CategoryUpsertWithWhereUniqueWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;
export const CategoryUpsertWithWhereUniqueWithoutParentCategoryInputObjectZodSchema = makeSchema();
