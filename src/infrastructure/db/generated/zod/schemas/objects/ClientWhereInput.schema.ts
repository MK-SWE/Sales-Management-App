import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ClientLedgerEntryListRelationFilterObjectSchema as ClientLedgerEntryListRelationFilterObjectSchema } from './ClientLedgerEntryListRelationFilter.schema';
import { ClientPaymentListRelationFilterObjectSchema as ClientPaymentListRelationFilterObjectSchema } from './ClientPaymentListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema as SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';
import { SaleReturnListRelationFilterObjectSchema as SaleReturnListRelationFilterObjectSchema } from './SaleReturnListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const clientwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientWhereInputObjectSchema), z.lazy(() => ClientWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientWhereInputObjectSchema), z.lazy(() => ClientWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isOpenAccountEnabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isBlocked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  creditLimit: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'creditLimit' must be a Decimal",
})]).optional().nullable(),
  currentBalance: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'currentBalance' must be a Decimal",
})]).optional(),
  contactInfo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ledgerEntries: z.lazy(() => ClientLedgerEntryListRelationFilterObjectSchema).optional(),
  payments: z.lazy(() => ClientPaymentListRelationFilterObjectSchema).optional(),
  sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnListRelationFilterObjectSchema).optional()
}).strict();
export const ClientWhereInputObjectSchema: z.ZodType<Prisma.ClientWhereInput> = clientwhereinputSchema as unknown as z.ZodType<Prisma.ClientWhereInput>;
export const ClientWhereInputObjectZodSchema = clientwhereinputSchema;
