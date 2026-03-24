import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutParentCategoryInputObjectSchema as CategoryCreateWithoutParentCategoryInputObjectSchema } from './CategoryCreateWithoutParentCategoryInput.schema';
import { CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema as CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedCreateWithoutParentCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutParentCategoryInput>;
export const CategoryCreateOrConnectWithoutParentCategoryInputObjectZodSchema = makeSchema();
