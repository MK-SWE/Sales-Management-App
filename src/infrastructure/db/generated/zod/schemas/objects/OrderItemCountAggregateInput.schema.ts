import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  ProductVariantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  unitPrice: z.literal(true).optional(),
  snapshotSKU: z.literal(true).optional(),
  snapshotAttributes: z.literal(true).optional(),
  snapshotImages: z.literal(true).optional(),
  snapshotProductName: z.literal(true).optional(),
  snapshotProductId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrderItemCountAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCountAggregateInputType>;
export const OrderItemCountAggregateInputObjectZodSchema = makeSchema();
