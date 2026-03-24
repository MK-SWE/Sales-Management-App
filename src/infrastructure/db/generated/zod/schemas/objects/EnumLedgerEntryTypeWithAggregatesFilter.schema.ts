import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema';
import { NestedEnumLedgerEntryTypeWithAggregatesFilterObjectSchema as NestedEnumLedgerEntryTypeWithAggregatesFilterObjectSchema } from './NestedEnumLedgerEntryTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLedgerEntryTypeFilterObjectSchema as NestedEnumLedgerEntryTypeFilterObjectSchema } from './NestedEnumLedgerEntryTypeFilter.schema'

const makeSchema = () => z.object({
  equals: LedgerEntryTypeSchema.optional(),
  in: LedgerEntryTypeSchema.array().optional(),
  notIn: LedgerEntryTypeSchema.array().optional(),
  not: z.union([LedgerEntryTypeSchema, z.lazy(() => NestedEnumLedgerEntryTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumLedgerEntryTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumLedgerEntryTypeFilterObjectSchema).optional()
}).strict();
export const EnumLedgerEntryTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumLedgerEntryTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLedgerEntryTypeWithAggregatesFilter>;
export const EnumLedgerEntryTypeWithAggregatesFilterObjectZodSchema = makeSchema();
