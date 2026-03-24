import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCountOutputTypeSelectObjectSchema as QuotationCountOutputTypeSelectObjectSchema } from './QuotationCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QuotationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const QuotationCountOutputTypeArgsObjectSchema = makeSchema();
export const QuotationCountOutputTypeArgsObjectZodSchema = makeSchema();
