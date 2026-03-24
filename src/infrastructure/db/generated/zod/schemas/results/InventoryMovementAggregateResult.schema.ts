import * as z from 'zod';
export const InventoryMovementAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    warehouseId: z.number(),
    variantId: z.number(),
    type: z.number(),
    quantity: z.number(),
    referenceId: z.number(),
    referenceType: z.number(),
    createdByUserId: z.number(),
    happenedAt: z.number(),
    createdAt: z.number(),
    warehouse: z.number(),
    variant: z.number(),
    createdByUser: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    warehouseId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable(),
    referenceId: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    happenedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    warehouseId: z.string().nullable(),
    variantId: z.string().nullable(),
    quantity: z.number().nullable(),
    referenceId: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    happenedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});