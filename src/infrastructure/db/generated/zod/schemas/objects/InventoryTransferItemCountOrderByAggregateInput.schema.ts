import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  transferId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const InventoryTransferItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCountOrderByAggregateInput>;
export const InventoryTransferItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
