import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductCountOutputTypeCountProductVariantsArgsObjectSchema = makeSchema();
export const ProductCountOutputTypeCountProductVariantsArgsObjectZodSchema = makeSchema();
