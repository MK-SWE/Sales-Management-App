import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const inventorytransferitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  transferId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional()
}).strict();
export const InventoryTransferItemScalarWhereInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemScalarWhereInput> = inventorytransferitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.InventoryTransferItemScalarWhereInput>;
export const InventoryTransferItemScalarWhereInputObjectZodSchema = inventorytransferitemscalarwhereinputSchema;
