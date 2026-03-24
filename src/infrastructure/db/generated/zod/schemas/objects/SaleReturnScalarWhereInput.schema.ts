import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumReturnStatusFilterObjectSchema as EnumReturnStatusFilterObjectSchema } from './EnumReturnStatusFilter.schema';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const salereturnscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleReturnScalarWhereInputObjectSchema), z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleReturnScalarWhereInputObjectSchema), z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  returnNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  originalSaleId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  warehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumReturnStatusFilterObjectSchema), ReturnStatusSchema]).optional(),
  subtotal: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'subtotal' must be a Decimal",
})]).optional(),
  grandTotal: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'grandTotal' must be a Decimal",
})]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  returnedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SaleReturnScalarWhereInputObjectSchema: z.ZodType<Prisma.SaleReturnScalarWhereInput> = salereturnscalarwhereinputSchema as unknown as z.ZodType<Prisma.SaleReturnScalarWhereInput>;
export const SaleReturnScalarWhereInputObjectZodSchema = salereturnscalarwhereinputSchema;
