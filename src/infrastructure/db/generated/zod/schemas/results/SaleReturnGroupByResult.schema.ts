import * as z from 'zod';
export const SaleReturnGroupByResultSchema = z.array(z.object({
  id: z.string(),
  returnNumber: z.string(),
  originalSaleId: z.string(),
  warehouseId: z.string(),
  clientId: z.string(),
  subtotal: z.number(),
  grandTotal: z.number(),
  notes: z.string(),
  returnedAt: z.date(),
  createdByUserId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    returnNumber: z.number(),
    originalSaleId: z.number(),
    warehouseId: z.number(),
    clientId: z.number(),
    status: z.number(),
    subtotal: z.number(),
    grandTotal: z.number(),
    notes: z.number(),
    returnedAt: z.number(),
    createdByUserId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    originalSale: z.number(),
    warehouse: z.number(),
    client: z.number(),
    createdByUser: z.number(),
    items: z.number()
  }).optional(),
  _sum: z.object({
    subtotal: z.number().nullable(),
    grandTotal: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    subtotal: z.number().nullable(),
    grandTotal: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    returnNumber: z.string().nullable(),
    originalSaleId: z.string().nullable(),
    warehouseId: z.string().nullable(),
    clientId: z.string().nullable(),
    subtotal: z.number().nullable(),
    grandTotal: z.number().nullable(),
    notes: z.string().nullable(),
    returnedAt: z.date().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    returnNumber: z.string().nullable(),
    originalSaleId: z.string().nullable(),
    warehouseId: z.string().nullable(),
    clientId: z.string().nullable(),
    subtotal: z.number().nullable(),
    grandTotal: z.number().nullable(),
    notes: z.string().nullable(),
    returnedAt: z.date().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));