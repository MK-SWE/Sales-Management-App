import * as z from 'zod';
export const AddressFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  label: z.string().optional(),
  address_line1: z.string(),
  address_line2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  is_default: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  orders: z.array(z.unknown())
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