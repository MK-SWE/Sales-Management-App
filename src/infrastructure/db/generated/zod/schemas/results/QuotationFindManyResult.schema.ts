import * as z from 'zod';
export const QuotationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  status: z.unknown(),
  notes: z.string().optional(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  orders: z.unknown().optional()
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