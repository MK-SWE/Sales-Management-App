import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  transferId: z.literal(true).optional(),
  variantId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
export const InventoryTransferItemMinAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemMinAggregateInputType>;
export const InventoryTransferItemMinAggregateInputObjectZodSchema = makeSchema();
