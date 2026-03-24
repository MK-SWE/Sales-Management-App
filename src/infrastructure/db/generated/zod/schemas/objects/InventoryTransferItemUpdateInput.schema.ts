import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { InventoryTransferUpdateOneRequiredWithoutItemsNestedInputObjectSchema as InventoryTransferUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './InventoryTransferUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInputObjectSchema as ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInputObjectSchema } from './ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInput.schema'

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
  transfer: z.lazy(() => InventoryTransferUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInputObjectSchema).optional()
}).strict();
export const InventoryTransferItemUpdateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateInput>;
export const InventoryTransferItemUpdateInputObjectZodSchema = makeSchema();
