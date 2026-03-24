import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutProductVariantsInputObjectSchema as ProductUpdateWithoutProductVariantsInputObjectSchema } from './ProductUpdateWithoutProductVariantsInput.schema';
import { ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema as ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductVariantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutProductVariantsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutProductVariantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutProductVariantsInput>;
export const ProductUpdateToOneWithWhereWithoutProductVariantsInputObjectZodSchema = makeSchema();
