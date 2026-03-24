import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartCreateNestedOneWithoutItemsInputObjectSchema as CartCreateNestedOneWithoutItemsInputObjectSchema } from './CartCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutProductVariantInput>;
export const CartItemCreateWithoutProductVariantInputObjectZodSchema = makeSchema();
