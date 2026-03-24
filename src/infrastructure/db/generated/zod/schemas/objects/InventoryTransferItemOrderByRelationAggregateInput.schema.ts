import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const InventoryTransferItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemOrderByRelationAggregateInput>;
export const InventoryTransferItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
