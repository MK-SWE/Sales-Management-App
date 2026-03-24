import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleReturnOrderByWithRelationInputObjectSchema as SaleReturnOrderByWithRelationInputObjectSchema } from './SaleReturnOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  saleReturnId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  refundPrice: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional(),
  saleReturn: z.lazy(() => SaleReturnOrderByWithRelationInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SaleReturnItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SaleReturnItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemOrderByWithRelationInput>;
export const SaleReturnItemOrderByWithRelationInputObjectZodSchema = makeSchema();
