import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLedgerEntryTypeFilterObjectSchema as EnumLedgerEntryTypeFilterObjectSchema } from './EnumLedgerEntryTypeFilter.schema';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDocumentTypeNullableFilterObjectSchema as EnumDocumentTypeNullableFilterObjectSchema } from './EnumDocumentTypeNullableFilter.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ClientScalarRelationFilterObjectSchema as ClientScalarRelationFilterObjectSchema } from './ClientScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const clientledgerentrywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientLedgerEntryWhereInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientLedgerEntryWhereInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumLedgerEntryTypeFilterObjectSchema), LedgerEntryTypeSchema]).optional(),
  amount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
})]).optional(),
  balanceAfter: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'balanceAfter' must be a Decimal",
})]).optional(),
  referenceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  referenceType: z.union([z.lazy(() => EnumDocumentTypeNullableFilterObjectSchema), DocumentTypeSchema]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  happenedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  client: z.union([z.lazy(() => ClientScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  createdByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ClientLedgerEntryWhereInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryWhereInput> = clientledgerentrywhereinputSchema as unknown as z.ZodType<Prisma.ClientLedgerEntryWhereInput>;
export const ClientLedgerEntryWhereInputObjectZodSchema = clientledgerentrywhereinputSchema;
