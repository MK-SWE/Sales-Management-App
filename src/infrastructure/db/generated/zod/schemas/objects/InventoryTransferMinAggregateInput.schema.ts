import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  transferNumber: z.literal(true).optional(),
  sourceWarehouseId: z.literal(true).optional(),
  destWarehouseId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  transferredAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const InventoryTransferMinAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferMinAggregateInputType>;
export const InventoryTransferMinAggregateInputObjectZodSchema = makeSchema();
