import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema';
import { DocumentTypeSchema } from '../enums/DocumentType.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  type: LedgerEntryTypeSchema,
  amount: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
}),
  balanceAfter: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'balanceAfter' must be a Decimal",
}),
  referenceId: z.string().optional().nullable(),
  referenceType: DocumentTypeSchema.optional().nullable(),
  createdByUserId: z.string().optional().nullable(),
  happenedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientLedgerEntryCreateManyClientInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateManyClientInput>;
export const ClientLedgerEntryCreateManyClientInputObjectZodSchema = makeSchema();
