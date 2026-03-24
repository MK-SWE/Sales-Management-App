import * as z from 'zod';
export const InventoryTransferGroupByResultSchema = z.array(z.object({
  id: z.string(),
  transferNumber: z.string(),
  sourceWarehouseId: z.string(),
  destWarehouseId: z.string(),
  notes: z.string(),
  createdByUserId: z.string(),
  transferredAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    transferNumber: z.number(),
    sourceWarehouseId: z.number(),
    destWarehouseId: z.number(),
    status: z.number(),
    notes: z.number(),
    createdByUserId: z.number(),
    transferredAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    sourceWarehouse: z.number(),
    destWarehouse: z.number(),
    createdByUser: z.number(),
    items: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    transferNumber: z.string().nullable(),
    sourceWarehouseId: z.string().nullable(),
    destWarehouseId: z.string().nullable(),
    notes: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    transferredAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    transferNumber: z.string().nullable(),
    sourceWarehouseId: z.string().nullable(),
    destWarehouseId: z.string().nullable(),
    notes: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    transferredAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));