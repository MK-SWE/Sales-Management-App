import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const CategoryCreatetagsInputObjectSchema: z.ZodType<Prisma.CategoryCreatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreatetagsInput>;
export const CategoryCreatetagsInputObjectZodSchema = makeSchema();
