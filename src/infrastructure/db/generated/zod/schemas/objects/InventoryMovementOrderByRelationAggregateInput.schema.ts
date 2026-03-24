import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const InventoryMovementOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.InventoryMovementOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementOrderByRelationAggregateInput>;
export const InventoryMovementOrderByRelationAggregateInputObjectZodSchema = makeSchema();
