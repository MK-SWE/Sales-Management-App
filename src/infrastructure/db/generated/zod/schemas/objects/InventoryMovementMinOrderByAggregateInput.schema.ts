import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  referenceId: SortOrderSchema.optional(),
  referenceType: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  happenedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const InventoryMovementMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryMovementMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementMinOrderByAggregateInput>;
export const InventoryMovementMinOrderByAggregateInputObjectZodSchema = makeSchema();
