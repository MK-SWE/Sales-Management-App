import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumQuotationStatusFilterObjectSchema as NestedEnumQuotationStatusFilterObjectSchema } from './NestedEnumQuotationStatusFilter.schema'

const nestedenumquotationstatuswithaggregatesfilterSchema = z.object({
  equals: QuotationStatusSchema.optional(),
  in: QuotationStatusSchema.array().optional(),
  notIn: QuotationStatusSchema.array().optional(),
  not: z.union([QuotationStatusSchema, z.lazy(() => NestedEnumQuotationStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumQuotationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumQuotationStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumQuotationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumQuotationStatusWithAggregatesFilter> = nestedenumquotationstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumQuotationStatusWithAggregatesFilter>;
export const NestedEnumQuotationStatusWithAggregatesFilterObjectZodSchema = nestedenumquotationstatuswithaggregatesfilterSchema;
