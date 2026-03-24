import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  transferId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const InventoryTransferItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemMaxOrderByAggregateInput>;
export const InventoryTransferItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
