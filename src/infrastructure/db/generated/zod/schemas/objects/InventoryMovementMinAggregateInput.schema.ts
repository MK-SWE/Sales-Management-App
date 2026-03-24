import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  warehouseId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  referenceId: z.literal(true).optional(),
  referenceType: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  happenedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const InventoryMovementMinAggregateInputObjectSchema: z.ZodType<Prisma.InventoryMovementMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementMinAggregateInputType>;
export const InventoryMovementMinAggregateInputObjectZodSchema = makeSchema();
