import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryUpdateWithoutChildrenInputObjectSchema as CategoryUpdateWithoutChildrenInputObjectSchema } from './CategoryUpdateWithoutChildrenInput.schema';
import { CategoryUncheckedUpdateWithoutChildrenInputObjectSchema as CategoryUncheckedUpdateWithoutChildrenInputObjectSchema } from './CategoryUncheckedUpdateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutChildrenInputObjectSchema)])
}).strict();
export const CategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutChildrenInput>;
export const CategoryUpdateToOneWithWhereWithoutChildrenInputObjectZodSchema = makeSchema();
