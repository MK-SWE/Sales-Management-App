import * as z from 'zod';
export const ProductVariantAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    SKU: z.number(),
    productId: z.number(),
    attributes: z.number(),
    price: z.number(),
    compareAtPrice: z.number(),
    stock: z.number(),
    reorderStock: z.number(),
    images: z.number(),
    isActive: z.number(),
    cartItems: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    product: z.number(),
    quotationItems: z.number(),
    orderItems: z.number(),
    warehouseStocks: z.number(),
    warehouseVariantSettings: z.number(),
    inventoryMovements: z.number(),
    transferItems: z.number(),
    saleItems: z.number(),
    saleReturnItems: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable(),
    compareAtPrice: z.number().nullable(),
    stock: z.number().nullable(),
    reorderStock: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable(),
    compareAtPrice: z.number().nullable(),
    stock: z.number().nullable(),
    reorderStock: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    SKU: z.string().nullable(),
    productId: z.string().nullable(),
    price: z.number().nullable(),
    compareAtPrice: z.number().nullable(),
    stock: z.number().int().nullable(),
    reorderStock: z.number().nullable(),
    images: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    SKU: z.string().nullable(),
    productId: z.string().nullable(),
    price: z.number().nullable(),
    compareAtPrice: z.number().nullable(),
    stock: z.number().int().nullable(),
    reorderStock: z.number().nullable(),
    images: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});