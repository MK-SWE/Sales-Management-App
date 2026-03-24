import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InventoryMovementCountOrderByAggregateInputObjectSchema as InventoryMovementCountOrderByAggregateInputObjectSchema } from './InventoryMovementCountOrderByAggregateInput.schema';
import { InventoryMovementAvgOrderByAggregateInputObjectSchema as InventoryMovementAvgOrderByAggregateInputObjectSchema } from './InventoryMovementAvgOrderByAggregateInput.schema';
import { InventoryMovementMaxOrderByAggregateInputObjectSchema as InventoryMovementMaxOrderByAggregateInputObjectSchema } from './InventoryMovementMaxOrderByAggregateInput.schema';
import { InventoryMovementMinOrderByAggregateInputObjectSchema as InventoryMovementMinOrderByAggregateInputObjectSchema } from './InventoryMovementMinOrderByAggregateInput.schema';
import { InventoryMovementSumOrderByAggregateInputObjectSchema as InventoryMovementSumOrderByAggregateInputObjectSchema } from './InventoryMovementSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  referenceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  happenedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => InventoryMovementCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => InventoryMovementAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InventoryMovementMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InventoryMovementMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => InventoryMovementSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InventoryMovementOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InventoryMovementOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementOrderByWithAggregationInput>;
export const InventoryMovementOrderByWithAggregationInputObjectZodSchema = makeSchema();
