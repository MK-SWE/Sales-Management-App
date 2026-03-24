import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WarehouseScalarRelationFilterObjectSchema as WarehouseScalarRelationFilterObjectSchema } from './WarehouseScalarRelationFilter.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { ProductVariantScalarRelationFilterObjectSchema as ProductVariantScalarRelationFilterObjectSchema } from './ProductVariantScalarRelationFilter.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const warehousevariantsettingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reorderStock: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
})]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  warehouse: z.union([z.lazy(() => WarehouseScalarRelationFilterObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema)]).optional(),
  variant: z.union([z.lazy(() => ProductVariantScalarRelationFilterObjectSchema), z.lazy(() => ProductVariantWhereInputObjectSchema)]).optional()
}).strict();
export const WarehouseVariantSettingWhereInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingWhereInput> = warehousevariantsettingwhereinputSchema as unknown as z.ZodType<Prisma.WarehouseVariantSettingWhereInput>;
export const WarehouseVariantSettingWhereInputObjectZodSchema = warehousevariantsettingwhereinputSchema;
