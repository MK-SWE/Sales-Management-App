import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuotationOrderByWithRelationInputObjectSchema as QuotationOrderByWithRelationInputObjectSchema } from './QuotationOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  quotationId: SortOrderSchema.optional(),
  ProductVariantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  snapshotSKU: SortOrderSchema.optional(),
  snapshotAttributes: SortOrderSchema.optional(),
  snapshotImages: SortOrderSchema.optional(),
  snapshotProductName: SortOrderSchema.optional(),
  snapshotProductId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  quotation: z.lazy(() => QuotationOrderByWithRelationInputObjectSchema).optional(),
  ProductVariant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const QuotationItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QuotationItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemOrderByWithRelationInput>;
export const QuotationItemOrderByWithRelationInputObjectZodSchema = makeSchema();
