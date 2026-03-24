import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientLedgerEntryUpdateManyWithoutClientNestedInputObjectSchema as ClientLedgerEntryUpdateManyWithoutClientNestedInputObjectSchema } from './ClientLedgerEntryUpdateManyWithoutClientNestedInput.schema';
import { SaleUpdateManyWithoutClientNestedInputObjectSchema as SaleUpdateManyWithoutClientNestedInputObjectSchema } from './SaleUpdateManyWithoutClientNestedInput.schema';
import { SaleReturnUpdateManyWithoutClientNestedInputObjectSchema as SaleReturnUpdateManyWithoutClientNestedInputObjectSchema } from './SaleReturnUpdateManyWithoutClientNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isOpenAccountEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isBlocked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  creditLimit: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'creditLimit' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  currentBalance: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'currentBalance' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  contactInfo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ledgerEntries: z.lazy(() => ClientLedgerEntryUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUpdateWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ClientUpdateWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateWithoutPaymentsInput>;
export const ClientUpdateWithoutPaymentsInputObjectZodSchema = makeSchema();
