import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductUpdateWithoutProductVariantsInputObjectSchema as ProductUpdateWithoutProductVariantsInputObjectSchema } from './ProductUpdateWithoutProductVariantsInput.schema';
import { ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema as ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductVariantsInput.schema';
import { ProductCreateWithoutProductVariantsInputObjectSchema as ProductCreateWithoutProductVariantsInputObjectSchema } from './ProductCreateWithoutProductVariantsInput.schema';
import { ProductUncheckedCreateWithoutProductVariantsInputObjectSchema as ProductUncheckedCreateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedCreateWithoutProductVariantsInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutProductVariantsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutProductVariantsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutProductVariantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutProductVariantsInput>;
export const ProductUpsertWithoutProductVariantsInputObjectZodSchema = makeSchema();
