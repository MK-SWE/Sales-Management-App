import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema as QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedCreateNestedManyWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema).optional()
}).strict();
export const QuotationUncheckedCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationUncheckedCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUncheckedCreateWithoutOrdersInput>;
export const QuotationUncheckedCreateWithoutOrdersInputObjectZodSchema = makeSchema();
