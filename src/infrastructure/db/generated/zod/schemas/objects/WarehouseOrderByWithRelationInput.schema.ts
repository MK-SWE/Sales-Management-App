import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WarehouseStockOrderByRelationAggregateInputObjectSchema as WarehouseStockOrderByRelationAggregateInputObjectSchema } from './WarehouseStockOrderByRelationAggregateInput.schema';
import { WarehouseVariantSettingOrderByRelationAggregateInputObjectSchema as WarehouseVariantSettingOrderByRelationAggregateInputObjectSchema } from './WarehouseVariantSettingOrderByRelationAggregateInput.schema';
import { InventoryMovementOrderByRelationAggregateInputObjectSchema as InventoryMovementOrderByRelationAggregateInputObjectSchema } from './InventoryMovementOrderByRelationAggregateInput.schema';
import { InventoryTransferOrderByRelationAggregateInputObjectSchema as InventoryTransferOrderByRelationAggregateInputObjectSchema } from './InventoryTransferOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema as SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';
import { SaleReturnOrderByRelationAggregateInputObjectSchema as SaleReturnOrderByRelationAggregateInputObjectSchema } from './SaleReturnOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  location: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  stocks: z.lazy(() => WarehouseStockOrderByRelationAggregateInputObjectSchema).optional(),
  variantSettings: z.lazy(() => WarehouseVariantSettingOrderByRelationAggregateInputObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementOrderByRelationAggregateInputObjectSchema).optional(),
  transfersOut: z.lazy(() => InventoryTransferOrderByRelationAggregateInputObjectSchema).optional(),
  transfersIn: z.lazy(() => InventoryTransferOrderByRelationAggregateInputObjectSchema).optional(),
  sales: z.lazy(() => SaleOrderByRelationAggregateInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WarehouseOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WarehouseOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseOrderByWithRelationInput>;
export const WarehouseOrderByWithRelationInputObjectZodSchema = makeSchema();
