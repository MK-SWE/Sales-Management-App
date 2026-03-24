import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProductUpdateproductImagesInputObjectSchema: z.ZodType<Prisma.ProductUpdateproductImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateproductImagesInput>;
export const ProductUpdateproductImagesInputObjectZodSchema = makeSchema();
