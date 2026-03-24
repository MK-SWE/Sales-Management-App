import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { EnumQuotationStatusFieldUpdateOperationsInputObjectSchema as EnumQuotationStatusFieldUpdateOperationsInputObjectSchema } from './EnumQuotationStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutQuotationsNestedInputObjectSchema as UserUpdateOneWithoutQuotationsNestedInputObjectSchema } from './UserUpdateOneWithoutQuotationsNestedInput.schema';
import { QuotationItemUpdateManyWithoutQuotationNestedInputObjectSchema as QuotationItemUpdateManyWithoutQuotationNestedInputObjectSchema } from './QuotationItemUpdateManyWithoutQuotationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([QuotationStatusSchema, z.lazy(() => EnumQuotationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutQuotationsNestedInputObjectSchema).optional(),
  items: z.lazy(() => QuotationItemUpdateManyWithoutQuotationNestedInputObjectSchema).optional()
}).strict();
export const QuotationUpdateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationUpdateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateWithoutOrdersInput>;
export const QuotationUpdateWithoutOrdersInputObjectZodSchema = makeSchema();
