import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const InventoryTransferItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemAvgOrderByAggregateInput>;
export const InventoryTransferItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
