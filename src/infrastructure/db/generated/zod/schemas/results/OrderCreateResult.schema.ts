import * as z from 'zod';
export const OrderCreateResultSchema = z.object({
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
});