import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandCountOutputTypeCountProductsArgsObjectSchema as BrandCountOutputTypeCountProductsArgsObjectSchema } from './BrandCountOutputTypeCountProductsArgs.schema'

const makeSchema = () => z.object({
  products: z.union([z.boolean(), z.lazy(() => BrandCountOutputTypeCountProductsArgsObjectSchema)]).optional()
}).strict();
export const BrandCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BrandCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BrandCountOutputTypeSelect>;
export const BrandCountOutputTypeSelectObjectZodSchema = makeSchema();
