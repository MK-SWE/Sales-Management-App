import * as z from 'zod';
export const SaleReturnItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    saleReturnId: z.number(),
    variantId: z.number(),
    quantity: z.number(),
    refundPrice: z.number(),
    lineTotal: z.number(),
    saleReturn: z.number(),
    variant: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    refundPrice: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    refundPrice: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    saleReturnId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable(),
    refundPrice: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    saleReturnId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable(),
    refundPrice: z.number().nullable(),
    lineTotal: z.number().nullable()
  }).nullable().optional()});