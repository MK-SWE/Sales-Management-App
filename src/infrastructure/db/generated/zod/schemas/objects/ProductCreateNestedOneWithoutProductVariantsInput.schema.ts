import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateWithoutProductVariantsInputObjectSchema as ProductCreateWithoutProductVariantsInputObjectSchema } from './ProductCreateWithoutProductVariantsInput.schema';
import { ProductUncheckedCreateWithoutProductVariantsInputObjectSchema as ProductUncheckedCreateWithoutProductVariantsInputObjectSchema } from './ProductUncheckedCreateWithoutProductVariantsInput.schema';
import { ProductCreateOrConnectWithoutProductVariantsInputObjectSchema as ProductCreateOrConnectWithoutProductVariantsInputObjectSchema } from './ProductCreateOrConnectWithoutProductVariantsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutProductVariantsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutProductVariantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutProductVariantsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutProductVariantsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductVariantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutProductVariantsInput>;
export const ProductCreateNestedOneWithoutProductVariantsInputObjectZodSchema = makeSchema();
