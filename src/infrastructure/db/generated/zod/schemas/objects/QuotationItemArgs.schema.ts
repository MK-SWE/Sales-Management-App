import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemSelectObjectSchema as QuotationItemSelectObjectSchema } from './QuotationItemSelect.schema';
import { QuotationItemIncludeObjectSchema as QuotationItemIncludeObjectSchema } from './QuotationItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QuotationItemSelectObjectSchema).optional(),
  include: z.lazy(() => QuotationItemIncludeObjectSchema).optional()
}).strict();
export const QuotationItemArgsObjectSchema = makeSchema();
export const QuotationItemArgsObjectZodSchema = makeSchema();
