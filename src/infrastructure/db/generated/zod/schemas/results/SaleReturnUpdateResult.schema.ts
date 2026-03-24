import * as z from 'zod';
export const SaleReturnUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  returnNumber: z.string(),
  originalSaleId: z.string().optional(),
  warehouseId: z.string(),
  clientId: z.string().optional(),
  status: z.unknown(),
  subtotal: z.number(),
  grandTotal: z.number(),
  notes: z.string().optional(),
  returnedAt: z.date().optional(),
  createdByUserId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  originalSale: z.unknown().optional(),
  warehouse: z.unknown(),
  client: z.unknown().optional(),
  createdByUser: z.unknown().optional(),
  items: z.array(z.unknown())
}));