import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryScalarWhereInputObjectSchema as CategoryScalarWhereInputObjectSchema } from './CategoryScalarWhereInput.schema';
import { CategoryUpdateManyMutationInputObjectSchema as CategoryUpdateManyMutationInputObjectSchema } from './CategoryUpdateManyMutationInput.schema';
import { CategoryUncheckedUpdateManyWithoutParentCategoryInputObjectSchema as CategoryUncheckedUpdateManyWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedUpdateManyWithoutParentCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CategoryUpdateManyMutationInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryInputObjectSchema)])
}).strict();
export const CategoryUpdateManyWithWhereWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutParentCategoryInput>;
export const CategoryUpdateManyWithWhereWithoutParentCategoryInputObjectZodSchema = makeSchema();
