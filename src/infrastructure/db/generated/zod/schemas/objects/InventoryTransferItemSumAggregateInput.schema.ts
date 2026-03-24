import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const InventoryTransferItemSumAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemSumAggregateInputType>;
export const InventoryTransferItemSumAggregateInputObjectZodSchema = makeSchema();
