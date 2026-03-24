import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { QuotationItemFindManySchema as QuotationItemFindManySchema } from '../findManyQuotationItem.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema';
import { QuotationCountOutputTypeArgsObjectSchema as QuotationCountOutputTypeArgsObjectSchema } from './QuotationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => QuotationItemFindManySchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => QuotationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const QuotationIncludeObjectSchema: z.ZodType<Prisma.QuotationInclude> = makeSchema() as unknown as z.ZodType<Prisma.QuotationInclude>;
export const QuotationIncludeObjectZodSchema = makeSchema();
