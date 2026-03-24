import * as z from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id', 'cartId', 'ProductVariantId', 'quantity', 'createdAt', 'updatedAt'])

export type CartItemScalarFieldEnum = z.infer<typeof CartItemScalarFieldEnumSchema>;