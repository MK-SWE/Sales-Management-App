import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemCartIdProductVariantIdCompoundUniqueInputObjectSchema as CartItemCartIdProductVariantIdCompoundUniqueInputObjectSchema } from './CartItemCartIdProductVariantIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId_ProductVariantId: z.lazy(() => CartItemCartIdProductVariantIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CartItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.CartItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemWhereUniqueInput>;
export const CartItemWhereUniqueInputObjectZodSchema = makeSchema();
