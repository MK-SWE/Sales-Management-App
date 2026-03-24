import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InventoryTransferCountOrderByAggregateInputObjectSchema as InventoryTransferCountOrderByAggregateInputObjectSchema } from './InventoryTransferCountOrderByAggregateInput.schema';
import { InventoryTransferMaxOrderByAggregateInputObjectSchema as InventoryTransferMaxOrderByAggregateInputObjectSchema } from './InventoryTransferMaxOrderByAggregateInput.schema';
import { InventoryTransferMinOrderByAggregateInputObjectSchema as InventoryTransferMinOrderByAggregateInputObjectSchema } from './InventoryTransferMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  transferNumber: SortOrderSchema.optional(),
  sourceWarehouseId: SortOrderSchema.optional(),
  destWarehouseId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  transferredAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => InventoryTransferCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InventoryTransferMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InventoryTransferMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InventoryTransferOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InventoryTransferOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferOrderByWithAggregationInput>;
export const InventoryTransferOrderByWithAggregationInputObjectZodSchema = makeSchema();
