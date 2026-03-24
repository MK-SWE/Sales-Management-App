import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const InventoryMovementSumAggregateInputObjectSchema: z.ZodType<Prisma.InventoryMovementSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementSumAggregateInputType>;
export const InventoryMovementSumAggregateInputObjectZodSchema = makeSchema();
