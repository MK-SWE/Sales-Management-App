import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutChildCategoryProductsInputObjectSchema as CategoryCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryCreateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutChildCategoryProductsInput.schema';
import { CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema as CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema } from './CategoryCreateOrConnectWithoutChildCategoryProductsInput.schema';
import { CategoryUpsertWithoutChildCategoryProductsInputObjectSchema as CategoryUpsertWithoutChildCategoryProductsInputObjectSchema } from './CategoryUpsertWithoutChildCategoryProductsInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInputObjectSchema as CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInput.schema';
import { CategoryUpdateWithoutChildCategoryProductsInputObjectSchema as CategoryUpdateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUpdateWithoutChildCategoryProductsInput.schema';
import { CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema as CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema } from './CategoryUncheckedUpdateWithoutChildCategoryProductsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutChildCategoryProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutChildCategoryProductsInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutChildCategoryProductsInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUpdateWithoutChildCategoryProductsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutChildCategoryProductsInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneRequiredWithoutChildCategoryProductsNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutChildCategoryProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutChildCategoryProductsNestedInput>;
export const CategoryUpdateOneRequiredWithoutChildCategoryProductsNestedInputObjectZodSchema = makeSchema();
