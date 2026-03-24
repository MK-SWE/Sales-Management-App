import * as z from 'zod';
export const CartItemUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  cartId: z.string(),
  cart: z.unknown(),
  ProductVariantId: z.string(),
  ProductVariant: z.unknown(),
  quantity: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
}));