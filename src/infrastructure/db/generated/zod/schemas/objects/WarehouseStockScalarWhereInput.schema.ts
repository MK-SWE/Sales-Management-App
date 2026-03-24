import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const warehousestockscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WarehouseStockScalarWhereInputObjectSchema), z.lazy(() => WarehouseStockScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WarehouseStockScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WarehouseStockScalarWhereInputObjectSchema), z.lazy(() => WarehouseStockScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
})]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WarehouseStockScalarWhereInputObjectSchema: z.ZodType<Prisma.WarehouseStockScalarWhereInput> = warehousestockscalarwhereinputSchema as unknown as z.ZodType<Prisma.WarehouseStockScalarWhereInput>;
export const WarehouseStockScalarWhereInputObjectZodSchema = warehousestockscalarwhereinputSchema;
