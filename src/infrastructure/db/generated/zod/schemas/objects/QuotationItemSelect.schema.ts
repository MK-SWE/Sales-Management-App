import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationArgsObjectSchema as QuotationArgsObjectSchema } from './QuotationArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  quotationId: z.boolean().optional(),
  quotation: z.union([z.boolean(), z.lazy(() => QuotationArgsObjectSchema)]).optional(),
  ProductVariantId: z.boolean().optional(),
  ProductVariant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional(),
  quantity: z.boolean().optional(),
  notes: z.boolean().optional(),
  snapshotSKU: z.boolean().optional(),
  snapshotAttributes: z.boolean().optional(),
  snapshotImages: z.boolean().optional(),
  snapshotProductName: z.boolean().optional(),
  snapshotProductId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const QuotationItemSelectObjectSchema: z.ZodType<Prisma.QuotationItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemSelect>;
export const QuotationItemSelectObjectZodSchema = makeSchema();
