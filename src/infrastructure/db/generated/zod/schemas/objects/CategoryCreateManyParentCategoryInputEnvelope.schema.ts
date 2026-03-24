import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateManyParentCategoryInputObjectSchema as CategoryCreateManyParentCategoryInputObjectSchema } from './CategoryCreateManyParentCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CategoryCreateManyParentCategoryInputObjectSchema), z.lazy(() => CategoryCreateManyParentCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CategoryCreateManyParentCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.CategoryCreateManyParentCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateManyParentCategoryInputEnvelope>;
export const CategoryCreateManyParentCategoryInputEnvelopeObjectZodSchema = makeSchema();
