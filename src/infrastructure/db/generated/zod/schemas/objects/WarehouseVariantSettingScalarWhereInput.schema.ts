import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const warehousevariantsettingscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema), z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema), z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WarehouseVariantSettingScalarWhereInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingScalarWhereInput> = warehousevariantsettingscalarwhereinputSchema as unknown as z.ZodType<Prisma.WarehouseVariantSettingScalarWhereInput>;
export const WarehouseVariantSettingScalarWhereInputObjectZodSchema = warehousevariantsettingscalarwhereinputSchema;
