import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutChildCategoryInputObjectSchema as ProductUpdateWithoutChildCategoryInputObjectSchema } from './ProductUpdateWithoutChildCategoryInput.schema';
import { ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema as ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema } from './ProductUncheckedUpdateWithoutChildCategoryInput.schema';
import { ProductCreateWithoutChildCategoryInputObjectSchema as ProductCreateWithoutChildCategoryInputObjectSchema } from './ProductCreateWithoutChildCategoryInput.schema';
import { ProductUncheckedCreateWithoutChildCategoryInputObjectSchema as ProductUncheckedCreateWithoutChildCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductUpdateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutChildCategoryInputObjectSchema)])
}).strict();
export const ProductUpsertWithWhereUniqueWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutChildCategoryInput>;
export const ProductUpsertWithWhereUniqueWithoutChildCategoryInputObjectZodSchema = makeSchema();
