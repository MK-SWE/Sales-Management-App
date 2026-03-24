import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WarehouseUpdateOneRequiredWithoutStocksNestedInputObjectSchema as WarehouseUpdateOneRequiredWithoutStocksNestedInputObjectSchema } from './WarehouseUpdateOneRequiredWithoutStocksNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  warehouse: z.lazy(() => WarehouseUpdateOneRequiredWithoutStocksNestedInputObjectSchema).optional()
}).strict();
export const WarehouseStockUpdateWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpdateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpdateWithoutVariantInput>;
export const WarehouseStockUpdateWithoutVariantInputObjectZodSchema = makeSchema();
