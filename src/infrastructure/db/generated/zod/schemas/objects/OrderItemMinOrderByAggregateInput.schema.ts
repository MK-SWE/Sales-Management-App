import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  ProductVariantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  snapshotSKU: SortOrderSchema.optional(),
  snapshotProductName: SortOrderSchema.optional(),
  snapshotProductId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const OrderItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMinOrderByAggregateInput>;
export const OrderItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
