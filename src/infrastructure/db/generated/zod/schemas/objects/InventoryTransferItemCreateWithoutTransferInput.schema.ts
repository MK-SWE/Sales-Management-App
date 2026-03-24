import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ProductVariantCreateNestedOneWithoutTransferItemsInputObjectSchema as ProductVariantCreateNestedOneWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateNestedOneWithoutTransferItemsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}),
  variant: z.lazy(() => ProductVariantCreateNestedOneWithoutTransferItemsInputObjectSchema)
}).strict();
export const InventoryTransferItemCreateWithoutTransferInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateWithoutTransferInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateWithoutTransferInput>;
export const InventoryTransferItemCreateWithoutTransferInputObjectZodSchema = makeSchema();
