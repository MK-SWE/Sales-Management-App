import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutChildrenInputObjectSchema as CategoryCreateWithoutChildrenInputObjectSchema } from './CategoryCreateWithoutChildrenInput.schema';
import { CategoryUncheckedCreateWithoutChildrenInputObjectSchema as CategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './CategoryUncheckedCreateWithoutChildrenInput.schema';
import { CategoryCreateOrConnectWithoutChildrenInputObjectSchema as CategoryCreateOrConnectWithoutChildrenInputObjectSchema } from './CategoryCreateOrConnectWithoutChildrenInput.schema';
import { CategoryUpsertWithoutChildrenInputObjectSchema as CategoryUpsertWithoutChildrenInputObjectSchema } from './CategoryUpsertWithoutChildrenInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema as CategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutChildrenInput.schema';
import { CategoryUpdateWithoutChildrenInputObjectSchema as CategoryUpdateWithoutChildrenInputObjectSchema } from './CategoryUpdateWithoutChildrenInput.schema';
import { CategoryUncheckedUpdateWithoutChildrenInputObjectSchema as CategoryUncheckedUpdateWithoutChildrenInputObjectSchema } from './CategoryUncheckedUpdateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutChildrenInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutChildrenInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneWithoutChildrenNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutChildrenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneWithoutChildrenNestedInput>;
export const CategoryUpdateOneWithoutChildrenNestedInputObjectZodSchema = makeSchema();
