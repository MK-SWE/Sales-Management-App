import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { OrderUncheckedCreateNestedOneWithoutQuotationInputObjectSchema as OrderUncheckedCreateNestedOneWithoutQuotationInputObjectSchema } from './OrderUncheckedCreateNestedOneWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedOneWithoutQuotationInputObjectSchema).optional()
}).strict();
export const QuotationUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.QuotationUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUncheckedCreateWithoutItemsInput>;
export const QuotationUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
