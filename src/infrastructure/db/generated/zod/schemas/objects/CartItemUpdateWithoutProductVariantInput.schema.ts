import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema as CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './CartUpdateOneRequiredWithoutItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cart: z.lazy(() => CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
export const CartItemUpdateWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithoutProductVariantInput>;
export const CartItemUpdateWithoutProductVariantInputObjectZodSchema = makeSchema();
