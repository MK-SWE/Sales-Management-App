import * as z from 'zod';
export const QuotationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  status: z.unknown(),
  notes: z.string().optional(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  orders: z.unknown().optional()
}));