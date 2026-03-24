import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutProductVariantInputObjectSchema as CartItemCreateWithoutProductVariantInputObjectSchema } from './CartItemCreateWithoutProductVariantInput.schema';
import { CartItemUncheckedCreateWithoutProductVariantInputObjectSchema as CartItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './CartItemUncheckedCreateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CartItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductVariantInputObjectSchema)])
}).strict();
export const CartItemCreateOrConnectWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductVariantInput>;
export const CartItemCreateOrConnectWithoutProductVariantInputObjectZodSchema = makeSchema();
