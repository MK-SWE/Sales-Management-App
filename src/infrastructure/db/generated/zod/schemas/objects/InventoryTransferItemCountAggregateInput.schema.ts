import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  transferId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const InventoryTransferItemCountAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCountAggregateInputType>;
export const InventoryTransferItemCountAggregateInputObjectZodSchema = makeSchema();
