import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemCreateWithoutProductVariantInputObjectSchema as CartItemCreateWithoutProductVariantInputObjectSchema } from './CartItemCreateWithoutProductVariantInput.schema';
import { CartItemUncheckedCreateWithoutProductVariantInputObjectSchema as CartItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './CartItemUncheckedCreateWithoutProductVariantInput.schema';
import { CartItemCreateOrConnectWithoutProductVariantInputObjectSchema as CartItemCreateOrConnectWithoutProductVariantInputObjectSchema } from './CartItemCreateOrConnectWithoutProductVariantInput.schema';
import { CartItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema as CartItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema } from './CartItemUpsertWithWhereUniqueWithoutProductVariantInput.schema';
import { CartItemCreateManyProductVariantInputEnvelopeObjectSchema as CartItemCreateManyProductVariantInputEnvelopeObjectSchema } from './CartItemCreateManyProductVariantInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema as CartItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema } from './CartItemUpdateWithWhereUniqueWithoutProductVariantInput.schema';
import { CartItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema as CartItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema } from './CartItemUpdateManyWithWhereWithoutProductVariantInput.schema';
import { CartItemScalarWhereInputObjectSchema as CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemCreateWithoutProductVariantInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CartItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CartItemUpdateManyWithoutProductVariantNestedInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithoutProductVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateManyWithoutProductVariantNestedInput>;
export const CartItemUpdateManyWithoutProductVariantNestedInputObjectZodSchema = makeSchema();
