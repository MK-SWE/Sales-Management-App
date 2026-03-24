import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema'

const nestedenumledgerentrytypefilterSchema = z.object({
  equals: LedgerEntryTypeSchema.optional(),
  in: LedgerEntryTypeSchema.array().optional(),
  notIn: LedgerEntryTypeSchema.array().optional(),
  not: z.union([LedgerEntryTypeSchema, z.lazy(() => NestedEnumLedgerEntryTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumLedgerEntryTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumLedgerEntryTypeFilter> = nestedenumledgerentrytypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumLedgerEntryTypeFilter>;
export const NestedEnumLedgerEntryTypeFilterObjectZodSchema = nestedenumledgerentrytypefilterSchema;
