import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const QuotationCreateManyUserInputObjectSchema: z.ZodType<Prisma.QuotationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateManyUserInput>;
export const QuotationCreateManyUserInputObjectZodSchema = makeSchema();
