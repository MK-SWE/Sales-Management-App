import * as z from 'zod';
// prettier-ignore
export const CartItemModelSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    cart: z.unknown(),
    ProductVariantId: z.string(),
    ProductVariant: z.unknown(),
    quantity: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CartItemPureType = z.infer<typeof CartItemModelSchema>;
