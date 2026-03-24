import * as z from 'zod';
export const WarehouseGroupByResultSchema = z.array(z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  location: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    code: z.number(),
    name: z.number(),
    location: z.number(),
    isActive: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    stocks: z.number(),
    variantSettings: z.number(),
    movements: z.number(),
    transfersOut: z.number(),
    transfersIn: z.number(),
    sales: z.number(),
    saleReturns: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    location: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    location: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));