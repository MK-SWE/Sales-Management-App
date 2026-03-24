import * as z from 'zod';
export const WarehouseDeleteResultSchema = z.nullable(z.object({
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
}));