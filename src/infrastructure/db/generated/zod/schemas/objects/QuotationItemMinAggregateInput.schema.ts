import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  quotationId: z.literal(true).optional(),
  ProductVariantId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  snapshotSKU: z.literal(true).optional(),
  snapshotProductName: z.literal(true).optional(),
  snapshotProductId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const QuotationItemMinAggregateInputObjectSchema: z.ZodType<Prisma.QuotationItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemMinAggregateInputType>;
export const QuotationItemMinAggregateInputObjectZodSchema = makeSchema();
