import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SaleOrderByWithRelationInputObjectSchema as SaleOrderByWithRelationInputObjectSchema } from './SaleOrderByWithRelationInput.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './WarehouseOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SaleReturnItemOrderByRelationAggregateInputObjectSchema as SaleReturnItemOrderByRelationAggregateInputObjectSchema } from './SaleReturnItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  returnNumber: SortOrderSchema.optional(),
  originalSaleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  warehouseId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  returnedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  originalSale: z.lazy(() => SaleOrderByWithRelationInputObjectSchema).optional(),
  warehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => SaleReturnItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SaleReturnOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SaleReturnOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnOrderByWithRelationInput>;
export const SaleReturnOrderByWithRelationInputObjectZodSchema = makeSchema();
