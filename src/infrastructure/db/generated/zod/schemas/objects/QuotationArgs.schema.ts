import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationSelectObjectSchema as QuotationSelectObjectSchema } from './QuotationSelect.schema';
import { QuotationIncludeObjectSchema as QuotationIncludeObjectSchema } from './QuotationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QuotationSelectObjectSchema).optional(),
  include: z.lazy(() => QuotationIncludeObjectSchema).optional()
}).strict();
export const QuotationArgsObjectSchema = makeSchema();
export const QuotationArgsObjectZodSchema = makeSchema();
