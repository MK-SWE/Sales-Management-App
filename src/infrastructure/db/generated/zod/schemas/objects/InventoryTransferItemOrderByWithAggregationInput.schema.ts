import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InventoryTransferItemCountOrderByAggregateInputObjectSchema as InventoryTransferItemCountOrderByAggregateInputObjectSchema } from './InventoryTransferItemCountOrderByAggregateInput.schema';
import { InventoryTransferItemAvgOrderByAggregateInputObjectSchema as InventoryTransferItemAvgOrderByAggregateInputObjectSchema } from './InventoryTransferItemAvgOrderByAggregateInput.schema';
import { InventoryTransferItemMaxOrderByAggregateInputObjectSchema as InventoryTransferItemMaxOrderByAggregateInputObjectSchema } from './InventoryTransferItemMaxOrderByAggregateInput.schema';
import { InventoryTransferItemMinOrderByAggregateInputObjectSchema as InventoryTransferItemMinOrderByAggregateInputObjectSchema } from './InventoryTransferItemMinOrderByAggregateInput.schema';
import { InventoryTransferItemSumOrderByAggregateInputObjectSchema as InventoryTransferItemSumOrderByAggregateInputObjectSchema } from './InventoryTransferItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  transferId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  _count: z.lazy(() => InventoryTransferItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => InventoryTransferItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InventoryTransferItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InventoryTransferItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => InventoryTransferItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InventoryTransferItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemOrderByWithAggregationInput>;
export const InventoryTransferItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
