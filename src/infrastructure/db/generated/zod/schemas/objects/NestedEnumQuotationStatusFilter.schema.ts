import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema'

const nestedenumquotationstatusfilterSchema = z.object({
  equals: QuotationStatusSchema.optional(),
  in: QuotationStatusSchema.array().optional(),
  notIn: QuotationStatusSchema.array().optional(),
  not: z.union([QuotationStatusSchema, z.lazy(() => NestedEnumQuotationStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumQuotationStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumQuotationStatusFilter> = nestedenumquotationstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumQuotationStatusFilter>;
export const NestedEnumQuotationStatusFilterObjectZodSchema = nestedenumquotationstatusfilterSchema;
