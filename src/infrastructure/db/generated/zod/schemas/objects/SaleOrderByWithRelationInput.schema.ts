import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './WarehouseOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SaleItemOrderByRelationAggregateInputObjectSchema as SaleItemOrderByRelationAggregateInputObjectSchema } from './SaleItemOrderByRelationAggregateInput.schema';
import { SaleReturnOrderByRelationAggregateInputObjectSchema as SaleReturnOrderByRelationAggregateInputObjectSchema } from './SaleReturnOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleNumber: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cashClientName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paymentMethod: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  amountDue: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  soldAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  warehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => SaleItemOrderByRelationAggregateInputObjectSchema).optional(),
  returns: z.lazy(() => SaleReturnOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SaleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SaleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleOrderByWithRelationInput>;
export const SaleOrderByWithRelationInputObjectZodSchema = makeSchema();
