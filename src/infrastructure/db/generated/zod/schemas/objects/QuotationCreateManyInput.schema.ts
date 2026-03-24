import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const QuotationCreateManyInputObjectSchema: z.ZodType<Prisma.QuotationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateManyInput>;
export const QuotationCreateManyInputObjectZodSchema = makeSchema();
