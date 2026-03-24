import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  saleNumber: z.literal(true).optional(),
  warehouseId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  cashClientName: z.literal(true).optional(),
  paymentMethod: z.literal(true).optional(),
  paymentStatus: z.literal(true).optional(),
  status: z.literal(true).optional(),
  subtotal: z.literal(true).optional(),
  grandTotal: z.literal(true).optional(),
  amountPaid: z.literal(true).optional(),
  amountDue: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  soldAt: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SaleCountAggregateInputObjectSchema: z.ZodType<Prisma.SaleCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleCountAggregateInputType>;
export const SaleCountAggregateInputObjectZodSchema = makeSchema();
