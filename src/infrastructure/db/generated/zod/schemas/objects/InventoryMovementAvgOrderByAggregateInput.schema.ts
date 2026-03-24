import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const InventoryMovementAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryMovementAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementAvgOrderByAggregateInput>;
export const InventoryMovementAvgOrderByAggregateInputObjectZodSchema = makeSchema();
