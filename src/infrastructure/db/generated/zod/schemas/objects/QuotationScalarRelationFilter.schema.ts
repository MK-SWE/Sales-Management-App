import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => QuotationWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => QuotationWhereInputObjectSchema).optional()
}).strict();
export const QuotationScalarRelationFilterObjectSchema: z.ZodType<Prisma.QuotationScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QuotationScalarRelationFilter>;
export const QuotationScalarRelationFilterObjectZodSchema = makeSchema();
