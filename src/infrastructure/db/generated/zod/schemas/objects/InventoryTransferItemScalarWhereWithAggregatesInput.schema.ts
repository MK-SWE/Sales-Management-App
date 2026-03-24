import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const inventorytransferitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryTransferItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryTransferItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryTransferItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryTransferItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InventoryTransferItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  transferId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional()
}).strict();
export const InventoryTransferItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemScalarWhereWithAggregatesInput> = inventorytransferitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InventoryTransferItemScalarWhereWithAggregatesInput>;
export const InventoryTransferItemScalarWhereWithAggregatesInputObjectZodSchema = inventorytransferitemscalarwherewithaggregatesinputSchema;
