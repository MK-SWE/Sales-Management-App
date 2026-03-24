import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreatetagsInputObjectSchema as CategoryCreatetagsInputObjectSchema } from './CategoryCreatetagsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  categoryName: z.string(),
  tags: z.union([z.lazy(() => CategoryCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CategoryCreateManyParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryCreateManyParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateManyParentCategoryInput>;
export const CategoryCreateManyParentCategoryInputObjectZodSchema = makeSchema();
