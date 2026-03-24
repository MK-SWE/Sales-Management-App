import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { InventoryTransferScalarRelationFilterObjectSchema as InventoryTransferScalarRelationFilterObjectSchema } from './InventoryTransferScalarRelationFilter.schema';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './InventoryTransferWhereInput.schema';
import { ProductVariantScalarRelationFilterObjectSchema as ProductVariantScalarRelationFilterObjectSchema } from './ProductVariantScalarRelationFilter.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const inventorytransferitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InventoryTransferItemWhereInputObjectSchema), z.lazy(() => InventoryTransferItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InventoryTransferItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InventoryTransferItemWhereInputObjectSchema), z.lazy(() => InventoryTransferItemWhereInputObjectSchema).array()]).optional(),
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
})]).optional(),
  transfer: z.union([z.lazy(() => InventoryTransferScalarRelationFilterObjectSchema), z.lazy(() => InventoryTransferWhereInputObjectSchema)]).optional(),
  variant: z.union([z.lazy(() => ProductVariantScalarRelationFilterObjectSchema), z.lazy(() => ProductVariantWhereInputObjectSchema)]).optional()
}).strict();
export const InventoryTransferItemWhereInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemWhereInput> = inventorytransferitemwhereinputSchema as unknown as z.ZodType<Prisma.InventoryTransferItemWhereInput>;
export const InventoryTransferItemWhereInputObjectZodSchema = inventorytransferitemwhereinputSchema;
