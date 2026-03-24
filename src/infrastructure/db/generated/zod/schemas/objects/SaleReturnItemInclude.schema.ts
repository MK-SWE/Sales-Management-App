import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnArgsObjectSchema as SaleReturnArgsObjectSchema } from './SaleReturnArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  saleReturn: z.union([z.boolean(), z.lazy(() => SaleReturnArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const SaleReturnItemIncludeObjectSchema: z.ZodType<Prisma.SaleReturnItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemInclude>;
export const SaleReturnItemIncludeObjectZodSchema = makeSchema();
