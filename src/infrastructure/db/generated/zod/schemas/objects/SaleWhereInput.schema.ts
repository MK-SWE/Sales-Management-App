import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPaymentMethodFilterObjectSchema as EnumPaymentMethodFilterObjectSchema } from './EnumPaymentMethodFilter.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumPaymentStatusFilterObjectSchema as EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumSaleStatusFilterObjectSchema as EnumSaleStatusFilterObjectSchema } from './EnumSaleStatusFilter.schema';
import { SaleStatusSchema } from '../enums/SaleStatus.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WarehouseScalarRelationFilterObjectSchema as WarehouseScalarRelationFilterObjectSchema } from './WarehouseScalarRelationFilter.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { ClientNullableScalarRelationFilterObjectSchema as ClientNullableScalarRelationFilterObjectSchema } from './ClientNullableScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SaleItemListRelationFilterObjectSchema as SaleItemListRelationFilterObjectSchema } from './SaleItemListRelationFilter.schema';
import { SaleReturnListRelationFilterObjectSchema as SaleReturnListRelationFilterObjectSchema } from './SaleReturnListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const salewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaleWhereInputObjectSchema), z.lazy(() => SaleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaleWhereInputObjectSchema), z.lazy(() => SaleWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  saleNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  warehouseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cashClientName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  paymentMethod: z.union([z.lazy(() => EnumPaymentMethodFilterObjectSchema), PaymentMethodSchema]).optional(),
  paymentStatus: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  status: z.union([z.lazy(() => EnumSaleStatusFilterObjectSchema), SaleStatusSchema]).optional(),
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
  amountPaid: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amountPaid' must be a Decimal",
})]).optional(),
  amountDue: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amountDue' must be a Decimal",
})]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  soldAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  warehouse: z.union([z.lazy(() => WarehouseScalarRelationFilterObjectSchema), z.lazy(() => WarehouseWhereInputObjectSchema)]).optional(),
  client: z.union([z.lazy(() => ClientNullableScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  createdByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => SaleItemListRelationFilterObjectSchema).optional(),
  returns: z.lazy(() => SaleReturnListRelationFilterObjectSchema).optional()
}).strict();
export const SaleWhereInputObjectSchema: z.ZodType<Prisma.SaleWhereInput> = salewhereinputSchema as unknown as z.ZodType<Prisma.SaleWhereInput>;
export const SaleWhereInputObjectZodSchema = salewhereinputSchema;
