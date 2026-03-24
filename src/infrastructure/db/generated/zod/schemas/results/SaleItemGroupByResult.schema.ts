import * as z from 'zod';
export const SaleItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  saleId: z.string(),
  variantId: z.string(),
  productNameSnapshot: z.string(),
  skuSnapshot: z.string(),
  attributesSnapshot: z.unknown(),
  listPrice: z.number(),
  unitPrice: z.number(),
  quantity: z.number(),
  lineTotal: z.number(),
  _count: z.object({
    id: z.number(),
    saleId: z.number(),
    variantId: z.number(),
    productNameSnapshot: z.number(),
    skuSnapshot: z.number(),
    attributesSnapshot: z.number(),
    listPrice: z.number(),
    unitPrice: z.number(),
    quantity: z.number(),
    lineTotal: z.number(),
    sale: z.number(),
    variant: z.number()
  }).optional(),
  _sum: z.object({
    listPrice: z.number().nullable(),
    unitPrice: z.number().nullable(),
    quantity: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    listPrice: z.number().nullable(),
    unitPrice: z.number().nullable(),
    quantity: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    saleId: z.string().nullable(),
    variantId: z.string().nullable(),
    productNameSnapshot: z.string().nullable(),
    skuSnapshot: z.string().nullable(),
    listPrice: z.number().nullable(),
    unitPrice: z.number().nullable(),
    quantity: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    saleId: z.string().nullable(),
    variantId: z.string().nullable(),
    productNameSnapshot: z.string().nullable(),
    skuSnapshot: z.string().nullable(),
    listPrice: z.number().nullable(),
    unitPrice: z.number().nullable(),
    quantity: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional()
}));