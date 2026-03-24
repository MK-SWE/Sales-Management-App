import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema';
import { EnumLedgerEntryTypeFieldUpdateOperationsInputObjectSchema as EnumLedgerEntryTypeFieldUpdateOperationsInputObjectSchema } from './EnumLedgerEntryTypeFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema as NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumDocumentTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([LedgerEntryTypeSchema, z.lazy(() => EnumLedgerEntryTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  balanceAfter: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'balanceAfter' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  referenceId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  referenceType: z.union([DocumentTypeSchema, z.lazy(() => NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  happenedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInput>;
export const ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
