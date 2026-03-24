import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema as QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedCreateNestedManyWithoutQuotationInput.schema';
import { OrderUncheckedCreateNestedOneWithoutQuotationInputObjectSchema as OrderUncheckedCreateNestedOneWithoutQuotationInputObjectSchema } from './OrderUncheckedCreateNestedOneWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: QuotationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedOneWithoutQuotationInputObjectSchema).optional()
}).strict();
export const QuotationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.QuotationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUncheckedCreateWithoutUserInput>;
export const QuotationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
