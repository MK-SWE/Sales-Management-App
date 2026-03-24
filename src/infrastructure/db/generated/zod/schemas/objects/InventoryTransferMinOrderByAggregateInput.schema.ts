import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  transferNumber: SortOrderSchema.optional(),
  sourceWarehouseId: SortOrderSchema.optional(),
  destWarehouseId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  transferredAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const InventoryTransferMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferMinOrderByAggregateInput>;
export const InventoryTransferMinOrderByAggregateInputObjectZodSchema = makeSchema();
