import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { QuotationItemFindManySchema as QuotationItemFindManySchema } from '../findManyQuotationItem.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema';
import { QuotationCountOutputTypeArgsObjectSchema as QuotationCountOutputTypeArgsObjectSchema } from './QuotationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => QuotationItemFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => QuotationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const QuotationSelectObjectSchema: z.ZodType<Prisma.QuotationSelect> = makeSchema() as unknown as z.ZodType<Prisma.QuotationSelect>;
export const QuotationSelectObjectZodSchema = makeSchema();
