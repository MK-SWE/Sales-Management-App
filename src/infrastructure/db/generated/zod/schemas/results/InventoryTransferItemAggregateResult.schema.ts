import * as z from 'zod';
export const InventoryTransferItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    transferId: z.number(),
    variantId: z.number(),
    quantity: z.number(),
    transfer: z.number(),
    variant: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    transferId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    transferId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable()
  }).nullable().optional()});