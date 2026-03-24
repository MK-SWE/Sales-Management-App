import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './QuotationItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => QuotationItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => QuotationItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => QuotationItemWhereInputObjectSchema).optional()
}).strict();
export const QuotationItemListRelationFilterObjectSchema: z.ZodType<Prisma.QuotationItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemListRelationFilter>;
export const QuotationItemListRelationFilterObjectZodSchema = makeSchema();
