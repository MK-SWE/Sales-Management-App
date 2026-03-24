import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema';
import { NestedEnumLedgerEntryTypeFilterObjectSchema as NestedEnumLedgerEntryTypeFilterObjectSchema } from './NestedEnumLedgerEntryTypeFilter.schema'

const makeSchema = () => z.object({
  equals: LedgerEntryTypeSchema.optional(),
  in: LedgerEntryTypeSchema.array().optional(),
  notIn: LedgerEntryTypeSchema.array().optional(),
  not: z.union([LedgerEntryTypeSchema, z.lazy(() => NestedEnumLedgerEntryTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumLedgerEntryTypeFilterObjectSchema: z.ZodType<Prisma.EnumLedgerEntryTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLedgerEntryTypeFilter>;
export const EnumLedgerEntryTypeFilterObjectZodSchema = makeSchema();
