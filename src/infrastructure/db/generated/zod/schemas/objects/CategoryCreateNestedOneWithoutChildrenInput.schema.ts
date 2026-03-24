import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutChildrenInputObjectSchema as CategoryCreateWithoutChildrenInputObjectSchema } from './CategoryCreateWithoutChildrenInput.schema';
import { CategoryUncheckedCreateWithoutChildrenInputObjectSchema as CategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './CategoryUncheckedCreateWithoutChildrenInput.schema';
import { CategoryCreateOrConnectWithoutChildrenInputObjectSchema as CategoryCreateOrConnectWithoutChildrenInputObjectSchema } from './CategoryCreateOrConnectWithoutChildrenInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoryCreateNestedOneWithoutChildrenInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedOneWithoutChildrenInput>;
export const CategoryCreateNestedOneWithoutChildrenInputObjectZodSchema = makeSchema();
