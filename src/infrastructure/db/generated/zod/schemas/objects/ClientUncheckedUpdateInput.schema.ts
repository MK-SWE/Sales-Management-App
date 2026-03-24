import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInputObjectSchema as ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInput.schema';
import { ClientPaymentUncheckedUpdateManyWithoutClientNestedInputObjectSchema as ClientPaymentUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './ClientPaymentUncheckedUpdateManyWithoutClientNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutClientNestedInputObjectSchema as SaleUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutClientNestedInput.schema';
import { SaleReturnUncheckedUpdateManyWithoutClientNestedInputObjectSchema as SaleReturnUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './SaleReturnUncheckedUpdateManyWithoutClientNestedInput.schema'

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
  ledgerEntries: z.lazy(() => ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  payments: z.lazy(() => ClientPaymentUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ClientUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedUpdateInput>;
export const ClientUncheckedUpdateInputObjectZodSchema = makeSchema();
