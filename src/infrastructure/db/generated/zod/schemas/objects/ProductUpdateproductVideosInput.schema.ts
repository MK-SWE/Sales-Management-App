import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProductUpdateproductVideosInputObjectSchema: z.ZodType<Prisma.ProductUpdateproductVideosInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateproductVideosInput>;
export const ProductUpdateproductVideosInputObjectZodSchema = makeSchema();
