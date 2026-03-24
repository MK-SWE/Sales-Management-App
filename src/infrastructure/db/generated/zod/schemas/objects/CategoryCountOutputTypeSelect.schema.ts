import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCountOutputTypeCountChildrenArgsObjectSchema as CategoryCountOutputTypeCountChildrenArgsObjectSchema } from './CategoryCountOutputTypeCountChildrenArgs.schema';
import { CategoryCountOutputTypeCountChildCategoryProductsArgsObjectSchema as CategoryCountOutputTypeCountChildCategoryProductsArgsObjectSchema } from './CategoryCountOutputTypeCountChildCategoryProductsArgs.schema'

const makeSchema = () => z.object({
  children: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeCountChildrenArgsObjectSchema)]).optional(),
  childCategoryProducts: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeCountChildCategoryProductsArgsObjectSchema)]).optional()
}).strict();
export const CategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCountOutputTypeSelect>;
export const CategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
