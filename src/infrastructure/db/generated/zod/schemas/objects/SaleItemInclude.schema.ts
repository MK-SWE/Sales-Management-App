import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleArgsObjectSchema as SaleArgsObjectSchema } from './SaleArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  sale: z.union([z.boolean(), z.lazy(() => SaleArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const SaleItemIncludeObjectSchema: z.ZodType<Prisma.SaleItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemInclude>;
export const SaleItemIncludeObjectZodSchema = makeSchema();
