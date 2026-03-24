import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateWithoutProductVariantsInputObjectSchema as ProductCreateWithoutProductVariantsInputObjectSchema } from './ProductCreateWithoutProductVariantsInput.schema';
import { ProductUncheckedCreateWithoutProductVariantsInputObjectSchema as ProductUncheckedCreateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedCreateWithoutProductVariantsInput.schema';
import { ProductCreateOrConnectWithoutProductVariantsInputObjectSchema as ProductCreateOrConnectWithoutProductVariantsInputObjectSchema } from './ProductCreateOrConnectWithoutProductVariantsInput.schema';
import { ProductUpsertWithoutProductVariantsInputObjectSchema as ProductUpsertWithoutProductVariantsInputObjectSchema } from './ProductUpsertWithoutProductVariantsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutProductVariantsInputObjectSchema as ProductUpdateToOneWithWhereWithoutProductVariantsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutProductVariantsInput.schema';
import { ProductUpdateWithoutProductVariantsInputObjectSchema as ProductUpdateWithoutProductVariantsInputObjectSchema } from './ProductUpdateWithoutProductVariantsInput.schema';
import { ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema as ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductVariantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutProductVariantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutProductVariantsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutProductVariantsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUpdateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutProductVariantsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutProductVariantsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductVariantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductVariantsNestedInput>;
export const ProductUpdateOneRequiredWithoutProductVariantsNestedInputObjectZodSchema = makeSchema();
