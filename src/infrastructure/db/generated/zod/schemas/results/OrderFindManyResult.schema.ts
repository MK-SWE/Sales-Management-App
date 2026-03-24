import * as z from 'zod';
export const OrderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  quotationId: z.string(),
  quotation: z.unknown(),
  status: z.unknown(),
  items: z.array(z.unknown()),
  totalAmount: z.number(),
  shippingAddressId: z.string().optional(),
  shippingAddress: z.unknown().optional(),
  snapshotAddress: z.unknown(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
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