import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { CategoryFindManySchema as CategoryFindManySchema } from '../findManyCategory.schema';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { CategoryCountOutputTypeArgsObjectSchema as CategoryCountOutputTypeArgsObjectSchema } from './CategoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  parentCategory: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  children: z.union([z.boolean(), z.lazy(() => CategoryFindManySchema)]).optional(),
  childCategoryProducts: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CategoryIncludeObjectSchema: z.ZodType<Prisma.CategoryInclude> = makeSchema() as unknown as z.ZodType<Prisma.CategoryInclude>;
export const CategoryIncludeObjectZodSchema = makeSchema();
