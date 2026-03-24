import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateNestedOneWithoutCartItemsInputObjectSchema as ProductVariantCreateNestedOneWithoutCartItemsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutCartItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ProductVariant: z.lazy(() => ProductVariantCreateNestedOneWithoutCartItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutCartInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutCartInput>;
export const CartItemCreateWithoutCartInputObjectZodSchema = makeSchema();
