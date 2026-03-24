import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCountOutputTypeCountProductVariantsArgsObjectSchema as ProductCountOutputTypeCountProductVariantsArgsObjectSchema } from './ProductCountOutputTypeCountProductVariantsArgs.schema'

const makeSchema = () => z.object({
  productVariants: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountProductVariantsArgsObjectSchema)]).optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
