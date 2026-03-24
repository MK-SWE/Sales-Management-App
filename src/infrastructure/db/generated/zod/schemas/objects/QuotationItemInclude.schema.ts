import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationArgsObjectSchema as QuotationArgsObjectSchema } from './QuotationArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  quotation: z.union([z.boolean(), z.lazy(() => QuotationArgsObjectSchema)]).optional(),
  ProductVariant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const QuotationItemIncludeObjectSchema: z.ZodType<Prisma.QuotationItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemInclude>;
export const QuotationItemIncludeObjectZodSchema = makeSchema();
