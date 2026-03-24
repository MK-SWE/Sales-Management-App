import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const InventoryTransferItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemAvgAggregateInputType>;
export const InventoryTransferItemAvgAggregateInputObjectZodSchema = makeSchema();
