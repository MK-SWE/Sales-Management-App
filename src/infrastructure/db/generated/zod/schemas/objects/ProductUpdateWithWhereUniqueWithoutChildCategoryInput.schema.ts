import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutChildCategoryInputObjectSchema as ProductUpdateWithoutChildCategoryInputObjectSchema } from './ProductUpdateWithoutChildCategoryInput.schema';
import { ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema as ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema } from './ProductUncheckedUpdateWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutChildCategoryInputObjectSchema)])
}).strict();
export const ProductUpdateWithWhereUniqueWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutChildCategoryInput>;
export const ProductUpdateWithWhereUniqueWithoutChildCategoryInputObjectZodSchema = makeSchema();
