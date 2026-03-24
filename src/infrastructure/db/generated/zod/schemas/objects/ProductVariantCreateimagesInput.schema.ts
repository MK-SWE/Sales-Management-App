import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductVariantCreateimagesInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateimagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateimagesInput>;
export const ProductVariantCreateimagesInputObjectZodSchema = makeSchema();
