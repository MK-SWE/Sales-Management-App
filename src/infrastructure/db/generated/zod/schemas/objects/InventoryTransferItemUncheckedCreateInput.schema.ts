import * as z from 'zod';
import { Prisma } from '@prisma/client';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  transferId: z.string(),
  variantId: z.string(),
  quantity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})
}).strict();
export const InventoryTransferItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUncheckedCreateInput>;
export const InventoryTransferItemUncheckedCreateInputObjectZodSchema = makeSchema();
