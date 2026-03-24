import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreatetagsInputObjectSchema: z.ZodType<Prisma.ProductCreatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreatetagsInput>;
export const ProductCreatetagsInputObjectZodSchema = makeSchema();
