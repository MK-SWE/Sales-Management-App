import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SaleOrderByWithRelationInputObjectSchema as SaleOrderByWithRelationInputObjectSchema } from './SaleOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  productNameSnapshot: SortOrderSchema.optional(),
  skuSnapshot: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attributesSnapshot: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  listPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional(),
  sale: z.lazy(() => SaleOrderByWithRelationInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SaleItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SaleItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemOrderByWithRelationInput>;
export const SaleItemOrderByWithRelationInputObjectZodSchema = makeSchema();
