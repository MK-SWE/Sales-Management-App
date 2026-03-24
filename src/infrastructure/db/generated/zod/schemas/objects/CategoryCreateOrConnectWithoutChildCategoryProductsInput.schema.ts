import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutChildCategoryProductsInputObjectSchema as CategoryCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryCreateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutChildCategoryProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutChildCategoryProductsInput>;
export const CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
