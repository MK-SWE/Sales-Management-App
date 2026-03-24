import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  ProductVariantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  unitPrice: z.literal(true).optional(),
  snapshotSKU: z.literal(true).optional(),
  snapshotProductName: z.literal(true).optional(),
  snapshotProductId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OrderItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMaxAggregateInputType>;
export const OrderItemMaxAggregateInputObjectZodSchema = makeSchema();
