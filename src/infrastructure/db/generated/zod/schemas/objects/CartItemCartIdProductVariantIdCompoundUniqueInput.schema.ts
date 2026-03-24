import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  cartId: z.string(),
  ProductVariantId: z.string()
}).strict();
export const CartItemCartIdProductVariantIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CartItemCartIdProductVariantIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCartIdProductVariantIdCompoundUniqueInput>;
export const CartItemCartIdProductVariantIdCompoundUniqueInputObjectZodSchema = makeSchema();
