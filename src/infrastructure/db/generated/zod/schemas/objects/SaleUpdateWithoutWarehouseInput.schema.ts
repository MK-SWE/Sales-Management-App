import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumPaymentMethodFieldUpdateOperationsInputObjectSchema as EnumPaymentMethodFieldUpdateOperationsInputObjectSchema } from './EnumPaymentMethodFieldUpdateOperationsInput.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema as EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from './EnumPaymentStatusFieldUpdateOperationsInput.schema';
import { SaleStatusSchema } from '../enums/SaleStatus.schema';
import { EnumSaleStatusFieldUpdateOperationsInputObjectSchema as EnumSaleStatusFieldUpdateOperationsInputObjectSchema } from './EnumSaleStatusFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientUpdateOneWithoutSalesNestedInputObjectSchema as ClientUpdateOneWithoutSalesNestedInputObjectSchema } from './ClientUpdateOneWithoutSalesNestedInput.schema';
import { UserUpdateOneWithoutSalesNestedInputObjectSchema as UserUpdateOneWithoutSalesNestedInputObjectSchema } from './UserUpdateOneWithoutSalesNestedInput.schema';
import { SaleItemUpdateManyWithoutSaleNestedInputObjectSchema as SaleItemUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleItemUpdateManyWithoutSaleNestedInput.schema';
import { SaleReturnUpdateManyWithoutOriginalSaleNestedInputObjectSchema as SaleReturnUpdateManyWithoutOriginalSaleNestedInputObjectSchema } from './SaleReturnUpdateManyWithoutOriginalSaleNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  saleNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  cashClientName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  paymentMethod: z.union([PaymentMethodSchema, z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentStatus: z.union([PaymentStatusSchema, z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([SaleStatusSchema, z.lazy(() => EnumSaleStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  subtotal: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'subtotal' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  grandTotal: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'grandTotal' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  amountPaid: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amountPaid' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  amountDue: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amountDue' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  soldAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  client: z.lazy(() => ClientUpdateOneWithoutSalesNestedInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserUpdateOneWithoutSalesNestedInputObjectSchema).optional(),
  items: z.lazy(() => SaleItemUpdateManyWithoutSaleNestedInputObjectSchema).optional(),
  returns: z.lazy(() => SaleReturnUpdateManyWithoutOriginalSaleNestedInputObjectSchema).optional()
}).strict();
export const SaleUpdateWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleUpdateWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateWithoutWarehouseInput>;
export const SaleUpdateWithoutWarehouseInputObjectZodSchema = makeSchema();
