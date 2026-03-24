import * as z from 'zod';

export const ProductVariantScalarFieldEnumSchema = z.enum(['id', 'SKU', 'productId', 'attributes', 'price', 'compareAtPrice', 'stock', 'reorderStock', 'images', 'isActive', 'createdAt', 'updatedAt'])

export type ProductVariantScalarFieldEnum = z.infer<typeof ProductVariantScalarFieldEnumSchema>;