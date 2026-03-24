import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductVariantInputObjectSchema as CartItemUpdateWithoutProductVariantInputObjectSchema } from './CartItemUpdateWithoutProductVariantInput.schema';
import { CartItemUncheckedUpdateWithoutProductVariantInputObjectSchema as CartItemUncheckedUpdateWithoutProductVariantInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductVariantInput.schema';
import { CartItemCreateWithoutProductVariantInputObjectSchema as CartItemCreateWithoutProductVariantInputObjectSchema } from './CartItemCreateWithoutProductVariantInput.schema';
import { CartItemUncheckedCreateWithoutProductVariantInputObjectSchema as CartItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './CartItemUncheckedCreateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CartItemUpdateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => CartItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductVariantInputObjectSchema)])
}).strict();
export const CartItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductVariantInput>;
export const CartItemUpsertWithWhereUniqueWithoutProductVariantInputObjectZodSchema = makeSchema();
