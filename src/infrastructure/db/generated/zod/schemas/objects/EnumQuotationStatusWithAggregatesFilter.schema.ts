import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { NestedEnumQuotationStatusWithAggregatesFilterObjectSchema as NestedEnumQuotationStatusWithAggregatesFilterObjectSchema } from './NestedEnumQuotationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumQuotationStatusFilterObjectSchema as NestedEnumQuotationStatusFilterObjectSchema } from './NestedEnumQuotationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: QuotationStatusSchema.optional(),
  in: QuotationStatusSchema.array().optional(),
  notIn: QuotationStatusSchema.array().optional(),
  not: z.union([QuotationStatusSchema, z.lazy(() => NestedEnumQuotationStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumQuotationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumQuotationStatusFilterObjectSchema).optional()
}).strict();
export const EnumQuotationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumQuotationStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumQuotationStatusWithAggregatesFilter>;
export const EnumQuotationStatusWithAggregatesFilterObjectZodSchema = makeSchema();
