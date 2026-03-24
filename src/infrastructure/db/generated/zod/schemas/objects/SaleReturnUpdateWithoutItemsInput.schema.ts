import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { EnumReturnStatusFieldUpdateOperationsInputObjectSchema as EnumReturnStatusFieldUpdateOperationsInputObjectSchema } from './EnumReturnStatusFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SaleUpdateOneWithoutReturnsNestedInputObjectSchema as SaleUpdateOneWithoutReturnsNestedInputObjectSchema } from './SaleUpdateOneWithoutReturnsNestedInput.schema';
import { WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInputObjectSchema as WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInputObjectSchema } from './WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInput.schema';
import { ClientUpdateOneWithoutSaleReturnsNestedInputObjectSchema as ClientUpdateOneWithoutSaleReturnsNestedInputObjectSchema } from './ClientUpdateOneWithoutSaleReturnsNestedInput.schema';
import { UserUpdateOneWithoutSaleReturnsNestedInputObjectSchema as UserUpdateOneWithoutSaleReturnsNestedInputObjectSchema } from './UserUpdateOneWithoutSaleReturnsNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  returnNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ReturnStatusSchema, z.lazy(() => EnumReturnStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  returnedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  originalSale: z.lazy(() => SaleUpdateOneWithoutReturnsNestedInputObjectSchema).optional(),
  warehouse: z.lazy(() => WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInputObjectSchema).optional(),
  client: z.lazy(() => ClientUpdateOneWithoutSaleReturnsNestedInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserUpdateOneWithoutSaleReturnsNestedInputObjectSchema).optional()
}).strict();
export const SaleReturnUpdateWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateWithoutItemsInput>;
export const SaleReturnUpdateWithoutItemsInputObjectZodSchema = makeSchema();
