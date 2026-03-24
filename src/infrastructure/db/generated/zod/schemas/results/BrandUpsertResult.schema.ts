import * as z from 'zod';
export const BrandUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  products: z.array(z.unknown())
});