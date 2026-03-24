import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const warehousestockscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WarehouseStockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WarehouseStockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WarehouseStockScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WarehouseStockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WarehouseStockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WarehouseStockScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WarehouseStockScalarWhereWithAggregatesInput> = warehousestockscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WarehouseStockScalarWhereWithAggregatesInput>;
export const WarehouseStockScalarWhereWithAggregatesInputObjectZodSchema = warehousestockscalarwherewithaggregatesinputSchema;
