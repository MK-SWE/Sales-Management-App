import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryUpdateWithoutChildrenInputObjectSchema as CategoryUpdateWithoutChildrenInputObjectSchema } from './CategoryUpdateWithoutChildrenInput.schema';
import { CategoryUncheckedUpdateWithoutChildrenInputObjectSchema as CategoryUncheckedUpdateWithoutChildrenInputObjectSchema } from './CategoryUncheckedUpdateWithoutChildrenInput.schema';
import { CategoryCreateWithoutChildrenInputObjectSchema as CategoryCreateWithoutChildrenInputObjectSchema } from './CategoryCreateWithoutChildrenInput.schema';
import { CategoryUncheckedCreateWithoutChildrenInputObjectSchema as CategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './CategoryUncheckedCreateWithoutChildrenInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutChildrenInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutChildrenInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithoutChildrenInput>;
export const CategoryUpsertWithoutChildrenInputObjectZodSchema = makeSchema();
