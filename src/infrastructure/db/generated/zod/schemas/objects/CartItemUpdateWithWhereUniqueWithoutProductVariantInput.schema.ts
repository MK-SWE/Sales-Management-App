import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductVariantInputObjectSchema as CartItemUpdateWithoutProductVariantInputObjectSchema } from './CartItemUpdateWithoutProductVariantInput.schema';
import { CartItemUncheckedUpdateWithoutProductVariantInputObjectSchema as CartItemUncheckedUpdateWithoutProductVariantInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductVariantInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductVariantInput>;
export const CartItemUpdateWithWhereUniqueWithoutProductVariantInputObjectZodSchema = makeSchema();
