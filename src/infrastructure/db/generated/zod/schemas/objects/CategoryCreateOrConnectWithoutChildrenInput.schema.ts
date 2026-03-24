import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutChildrenInputObjectSchema as CategoryCreateWithoutChildrenInputObjectSchema } from './CategoryCreateWithoutChildrenInput.schema';
import { CategoryUncheckedCreateWithoutChildrenInputObjectSchema as CategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './CategoryUncheckedCreateWithoutChildrenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutChildrenInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutChildrenInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutChildrenInput>;
export const CategoryCreateOrConnectWithoutChildrenInputObjectZodSchema = makeSchema();
