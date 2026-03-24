import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MovementTypeSchema } from '../enums/MovementType.schema';
import { EnumMovementTypeFieldUpdateOperationsInputObjectSchema as EnumMovementTypeFieldUpdateOperationsInputObjectSchema } from './EnumMovementTypeFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema as NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumDocumentTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  warehouseId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  variantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([MovementTypeSchema, z.lazy(() => EnumMovementTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  referenceId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  referenceType: z.union([DocumentTypeSchema, z.lazy(() => NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  happenedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementUncheckedUpdateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUncheckedUpdateWithoutCreatedByUserInput>;
export const InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
