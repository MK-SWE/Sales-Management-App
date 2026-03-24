import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const warehousevariantsettingscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WarehouseVariantSettingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WarehouseVariantSettingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WarehouseVariantSettingScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WarehouseVariantSettingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WarehouseVariantSettingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reorderStock: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
})]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WarehouseVariantSettingScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingScalarWhereWithAggregatesInput> = warehousevariantsettingscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WarehouseVariantSettingScalarWhereWithAggregatesInput>;
export const WarehouseVariantSettingScalarWhereWithAggregatesInputObjectZodSchema = warehousevariantsettingscalarwherewithaggregatesinputSchema;
