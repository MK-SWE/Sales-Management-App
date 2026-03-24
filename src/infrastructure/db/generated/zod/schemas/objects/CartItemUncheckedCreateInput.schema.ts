import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  ProductVariantId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CartItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateInput>;
export const CartItemUncheckedCreateInputObjectZodSchema = makeSchema();
