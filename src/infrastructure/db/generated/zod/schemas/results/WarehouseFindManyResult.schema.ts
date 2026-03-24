import * as z from 'zod';
export const WarehouseFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  location: z.string().optional(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  stocks: z.array(z.unknown()),
  variantSettings: z.array(z.unknown()),
  movements: z.array(z.unknown()),
  transfersOut: z.array(z.unknown()),
  transfersIn: z.array(z.unknown()),
  sales: z.array(z.unknown()),
  saleReturns: z.array(z.unknown())
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