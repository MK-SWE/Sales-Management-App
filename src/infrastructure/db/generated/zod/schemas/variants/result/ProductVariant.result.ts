import * as z from 'zod';
// prettier-ignore
export const ProductVariantResultSchema = z.object({
    id: z.string(),
    SKU: z.string(),
    productId: z.string(),
    attributes: z.unknown(),
    price: z.number(),
    compareAtPrice: z.number().nullable(),
    stock: z.number().int(),
    reorderStock: z.number(),
    images: z.array(z.string()),
    isActive: z.boolean(),
    cartItems: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    product: z.unknown(),
    quotationItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    warehouseStocks: z.array(z.unknown()),
    warehouseVariantSettings: z.array(z.unknown()),
    inventoryMovements: z.array(z.unknown()),
    transferItems: z.array(z.unknown()),
    saleItems: z.array(z.unknown()),
    saleReturnItems: z.array(z.unknown())
}).strict();

export type ProductVariantResultType = z.infer<typeof ProductVariantResultSchema>;
