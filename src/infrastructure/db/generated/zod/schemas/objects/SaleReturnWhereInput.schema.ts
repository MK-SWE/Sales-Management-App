import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumReturnStatusFilterObjectSchema as EnumReturnStatusFilterObjectSchema } from './EnumReturnStatusFilter.schema';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SaleNullableScalarRelationFilterObjectSchema as SaleNullableScalarRelationFilterObjectSchema } from './SaleNullableScalarRelationFilter.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema';
import { WarehouseScalarRelationFilterObjectSchema as WarehouseScalarRelationFilterObjectSchema } from './WarehouseScalarRelationFilter.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { ClientNullableScalarRelationFilterObjectSchema as ClientNullableScalarRelationFilterObjectSchema } from './ClientNullableScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SaleReturnItemListRelationFilterObjectSchema as SaleReturnItemListRelationFilterObjectSchema } from './SaleReturnItemListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const salereturnwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleReturnWhereInputObjectSchema), z.lazy(() => SaleReturnWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleReturnWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleReturnWhereInputObjectSchema), z.lazy(() => SaleReturnWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  originalSale: z.union([z.lazy(() => SaleNullableScalarRelationFilterObjectSchema), z.lazy(() => SaleWhereInputObjectSchema)]).optional(),
  warehouse: z.union([z.lazy(() => WarehouseScalarRelationFilterObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema)]).optional(),
  client: z.union([z.lazy(() => ClientNullableScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  createdByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => SaleReturnItemListRelationFilterObjectSchema).optional()
}).strict();
export const SaleReturnWhereInputObjectSchema: z.ZodType<Prisma.SaleReturnWhereInput> = salereturnwhereinputSchema as unknown as z.ZodType<Prisma.SaleReturnWhereInput>;
export const SaleReturnWhereInputObjectZodSchema = salereturnwhereinputSchema;
