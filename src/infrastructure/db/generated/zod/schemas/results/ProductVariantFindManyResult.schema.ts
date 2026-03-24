import * as z from 'zod';
export const ProductVariantFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  SKU: z.string(),
  productId: z.string(),
  attributes: z.unknown(),
  price: z.number(),
  compareAtPrice: z.number().optional(),
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});