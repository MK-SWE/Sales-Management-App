import * as z from 'zod';
export const SaleFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  saleNumber: z.string(),
  warehouseId: z.string(),
  clientId: z.string().optional(),
  cashClientName: z.string().optional(),
  paymentMethod: z.unknown(),
  paymentStatus: z.unknown(),
  status: z.unknown(),
  subtotal: z.number(),
  grandTotal: z.number(),
  amountPaid: z.number(),
  amountDue: z.number(),
  notes: z.string().optional(),
  soldAt: z.date().optional(),
  createdByUserId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  warehouse: z.unknown(),
  client: z.unknown().optional(),
  createdByUser: z.unknown().optional(),
  items: z.array(z.unknown()),
  returns: z.array(z.unknown())
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