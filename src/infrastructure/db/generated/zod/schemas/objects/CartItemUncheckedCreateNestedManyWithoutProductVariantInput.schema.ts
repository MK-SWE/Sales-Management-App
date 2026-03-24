import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemCreateWithoutProductVariantInputObjectSchema as CartItemCreateWithoutProductVariantInputObjectSchema } from './CartItemCreateWithoutProductVariantInput.schema';
import { CartItemUncheckedCreateWithoutProductVariantInputObjectSchema as CartItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './CartItemUncheckedCreateWithoutProductVariantInput.schema';
import { CartItemCreateOrConnectWithoutProductVariantInputObjectSchema as CartItemCreateOrConnectWithoutProductVariantInputObjectSchema } from './CartItemCreateOrConnectWithoutProductVariantInput.schema';
import { CartItemCreateManyProductVariantInputEnvelopeObjectSchema as CartItemCreateManyProductVariantInputEnvelopeObjectSchema } from './CartItemCreateManyProductVariantInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemCreateWithoutProductVariantInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CartItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutProductVariantInput>;
export const CartItemUncheckedCreateNestedManyWithoutProductVariantInputObjectZodSchema = makeSchema();
