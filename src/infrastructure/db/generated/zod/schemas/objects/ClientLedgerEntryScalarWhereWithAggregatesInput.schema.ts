import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumLedgerEntryTypeWithAggregatesFilterObjectSchema as EnumLedgerEntryTypeWithAggregatesFilterObjectSchema } from './EnumLedgerEntryTypeWithAggregatesFilter.schema';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumDocumentTypeNullableWithAggregatesFilterObjectSchema as EnumDocumentTypeNullableWithAggregatesFilterObjectSchema } from './EnumDocumentTypeNullableWithAggregatesFilter.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const clientledgerentryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientLedgerEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientLedgerEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientLedgerEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientLedgerEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientLedgerEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  clientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumLedgerEntryTypeWithAggregatesFilterObjectSchema), LedgerEntryTypeSchema]).optional(),
  amount: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
})]).optional(),
  balanceAfter: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'balanceAfter' must be a Decimal",
})]).optional(),
  referenceId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  referenceType: z.union([z.lazy(() => EnumDocumentTypeNullableWithAggregatesFilterObjectSchema), DocumentTypeSchema]).optional().nullable(),
  createdByUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  happenedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClientLedgerEntryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryScalarWhereWithAggregatesInput> = clientledgerentryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ClientLedgerEntryScalarWhereWithAggregatesInput>;
export const ClientLedgerEntryScalarWhereWithAggregatesInputObjectZodSchema = clientledgerentryscalarwherewithaggregatesinputSchema;
