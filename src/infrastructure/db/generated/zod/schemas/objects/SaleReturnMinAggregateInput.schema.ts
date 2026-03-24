import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  returnNumber: z.literal(true).optional(),
  originalSaleId: z.literal(true).optional(),
  warehouseId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  subtotal: z.literal(true).optional(),
  grandTotal: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  returnedAt: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SaleReturnMinAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnMinAggregateInputType>;
export const SaleReturnMinAggregateInputObjectZodSchema = makeSchema();
