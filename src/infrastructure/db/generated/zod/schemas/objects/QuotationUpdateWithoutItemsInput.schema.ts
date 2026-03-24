import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { EnumQuotationStatusFieldUpdateOperationsInputObjectSchema as EnumQuotationStatusFieldUpdateOperationsInputObjectSchema } from './EnumQuotationStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutQuotationsNestedInputObjectSchema as UserUpdateOneWithoutQuotationsNestedInputObjectSchema } from './UserUpdateOneWithoutQuotationsNestedInput.schema';
import { OrderUpdateOneWithoutQuotationNestedInputObjectSchema as OrderUpdateOneWithoutQuotationNestedInputObjectSchema } from './OrderUpdateOneWithoutQuotationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([QuotationStatusSchema, z.lazy(() => EnumQuotationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutQuotationsNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUpdateOneWithoutQuotationNestedInputObjectSchema).optional()
}).strict();
export const QuotationUpdateWithoutItemsInputObjectSchema: z.ZodType<Prisma.QuotationUpdateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateWithoutItemsInput>;
export const QuotationUpdateWithoutItemsInputObjectZodSchema = makeSchema();
