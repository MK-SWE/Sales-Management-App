import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutProductVariantsInputObjectSchema as ProductCreateWithoutProductVariantsInputObjectSchema } from './ProductCreateWithoutProductVariantsInput.schema';
import { ProductUncheckedCreateWithoutProductVariantsInputObjectSchema as ProductUncheckedCreateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedCreateWithoutProductVariantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutProductVariantsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutProductVariantsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductVariantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutProductVariantsInput>;
export const ProductCreateOrConnectWithoutProductVariantsInputObjectZodSchema = makeSchema();
