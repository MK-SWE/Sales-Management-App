import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { NestedEnumQuotationStatusFilterObjectSchema as NestedEnumQuotationStatusFilterObjectSchema } from './NestedEnumQuotationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: QuotationStatusSchema.optional(),
  in: QuotationStatusSchema.array().optional(),
  notIn: QuotationStatusSchema.array().optional(),
  not: z.union([QuotationStatusSchema, z.lazy(() => NestedEnumQuotationStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumQuotationStatusFilterObjectSchema: z.ZodType<Prisma.EnumQuotationStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumQuotationStatusFilter>;
export const EnumQuotationStatusFilterObjectZodSchema = makeSchema();
