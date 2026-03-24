import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => QuotationWhereInputObjectSchema).optional(),
  some: z.lazy(() => QuotationWhereInputObjectSchema).optional(),
  none: z.lazy(() => QuotationWhereInputObjectSchema).optional()
}).strict();
export const QuotationListRelationFilterObjectSchema: z.ZodType<Prisma.QuotationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QuotationListRelationFilter>;
export const QuotationListRelationFilterObjectZodSchema = makeSchema();
