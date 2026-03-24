import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { InventoryTransferCreateNestedOneWithoutItemsInputObjectSchema as InventoryTransferCreateNestedOneWithoutItemsInputObjectSchema } from './InventoryTransferCreateNestedOneWithoutItemsInput.schema'

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
  transfer: z.lazy(() => InventoryTransferCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const InventoryTransferItemCreateWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateWithoutVariantInput>;
export const InventoryTransferItemCreateWithoutVariantInputObjectZodSchema = makeSchema();
