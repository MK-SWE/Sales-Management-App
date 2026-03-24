import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutChildCategoryProductsInputObjectSchema as CategoryCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryCreateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutChildCategoryProductsInput.schema';
import { CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema as CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema } from './CategoryCreateOrConnectWithoutChildCategoryProductsInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoryCreateNestedOneWithoutChildCategoryProductsInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutChildCategoryProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedOneWithoutChildCategoryProductsInput>;
export const CategoryCreateNestedOneWithoutChildCategoryProductsInputObjectZodSchema = makeSchema();
