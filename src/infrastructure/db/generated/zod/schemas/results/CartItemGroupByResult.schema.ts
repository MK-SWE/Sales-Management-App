import * as z from 'zod';
export const CartItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  cartId: z.string(),
  ProductVariantId: z.string(),
  quantity: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    cartId: z.number(),
    cart: z.number(),
    ProductVariantId: z.number(),
    ProductVariant: z.number(),
    quantity: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    cartId: z.string().nullable(),
    ProductVariantId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    cartId: z.string().nullable(),
    ProductVariantId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));