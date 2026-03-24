import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnArgsObjectSchema as SaleReturnArgsObjectSchema } from './SaleReturnArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  saleReturnId: z.boolean().optional(),
  variantId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  refundPrice: z.boolean().optional(),
  lineTotal: z.boolean().optional(),
  saleReturn: z.union([z.boolean(), z.lazy(() => SaleReturnArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const SaleReturnItemSelectObjectSchema: z.ZodType<Prisma.SaleReturnItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemSelect>;
export const SaleReturnItemSelectObjectZodSchema = makeSchema();
