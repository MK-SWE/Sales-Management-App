import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './WarehouseOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { InventoryTransferItemOrderByRelationAggregateInputObjectSchema as InventoryTransferItemOrderByRelationAggregateInputObjectSchema } from './InventoryTransferItemOrderByRelationAggregateInput.schema'

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
  sourceWarehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  destWarehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => InventoryTransferItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const InventoryTransferOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InventoryTransferOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferOrderByWithRelationInput>;
export const InventoryTransferOrderByWithRelationInputObjectZodSchema = makeSchema();
