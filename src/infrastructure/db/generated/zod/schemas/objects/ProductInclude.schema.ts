import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandArgsObjectSchema as BrandArgsObjectSchema } from './BrandArgs.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { ProductVariantFindManySchema as ProductVariantFindManySchema } from '../findManyProductVariant.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  brand: z.union([z.boolean(), z.lazy(() => BrandArgsObjectSchema)]).optional(),
  childCategory: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  productVariants: z.union([z.boolean(), z.lazy(() => ProductVariantFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductIncludeObjectSchema: z.ZodType<Prisma.ProductInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectZodSchema = makeSchema();
