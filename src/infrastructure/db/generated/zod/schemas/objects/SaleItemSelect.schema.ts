import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleArgsObjectSchema as SaleArgsObjectSchema } from './SaleArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  saleId: z.boolean().optional(),
  variantId: z.boolean().optional(),
  productNameSnapshot: z.boolean().optional(),
  skuSnapshot: z.boolean().optional(),
  attributesSnapshot: z.boolean().optional(),
  listPrice: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  quantity: z.boolean().optional(),
  lineTotal: z.boolean().optional(),
  sale: z.union([z.boolean(), z.lazy(() => SaleArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const SaleItemSelectObjectSchema: z.ZodType<Prisma.SaleItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemSelect>;
export const SaleItemSelectObjectZodSchema = makeSchema();
