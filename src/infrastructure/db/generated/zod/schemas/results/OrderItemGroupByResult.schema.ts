import * as z from 'zod';
export const OrderItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  ProductVariantId: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  snapshotSKU: z.string(),
  snapshotAttributes: z.unknown(),
  snapshotImages: z.array(z.string()),
  snapshotProductName: z.string(),
  snapshotProductId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    order: z.number(),
    ProductVariantId: z.number(),
    ProductVariant: z.number(),
    quantity: z.number(),
    unitPrice: z.number(),
    snapshotSKU: z.number(),
    snapshotAttributes: z.number(),
    snapshotImages: z.number(),
    snapshotProductName: z.number(),
    snapshotProductId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    unitPrice: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    unitPrice: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    ProductVariantId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    unitPrice: z.number().nullable(),
    snapshotSKU: z.string().nullable(),
    snapshotImages: z.array(z.string()).nullable(),
    snapshotProductName: z.string().nullable(),
    snapshotProductId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    ProductVariantId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    unitPrice: z.number().nullable(),
    snapshotSKU: z.string().nullable(),
    snapshotImages: z.array(z.string()).nullable(),
    snapshotProductName: z.string().nullable(),
    snapshotProductId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));