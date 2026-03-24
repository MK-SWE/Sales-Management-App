import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const InventoryTransferOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferOrderByRelationAggregateInput>;
export const InventoryTransferOrderByRelationAggregateInputObjectZodSchema = makeSchema();
