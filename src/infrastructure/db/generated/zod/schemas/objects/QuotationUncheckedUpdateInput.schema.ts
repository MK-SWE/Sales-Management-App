import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { EnumQuotationStatusFieldUpdateOperationsInputObjectSchema as EnumQuotationStatusFieldUpdateOperationsInputObjectSchema } from './EnumQuotationStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QuotationItemUncheckedUpdateManyWithoutQuotationNestedInputObjectSchema as QuotationItemUncheckedUpdateManyWithoutQuotationNestedInputObjectSchema } from './QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput.schema';
import { OrderUncheckedUpdateOneWithoutQuotationNestedInputObjectSchema as OrderUncheckedUpdateOneWithoutQuotationNestedInputObjectSchema } from './OrderUncheckedUpdateOneWithoutQuotationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([QuotationStatusSchema, z.lazy(() => EnumQuotationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => QuotationItemUncheckedUpdateManyWithoutQuotationNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateOneWithoutQuotationNestedInputObjectSchema).optional()
}).strict();
export const QuotationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.QuotationUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUncheckedUpdateInput>;
export const QuotationUncheckedUpdateInputObjectZodSchema = makeSchema();
