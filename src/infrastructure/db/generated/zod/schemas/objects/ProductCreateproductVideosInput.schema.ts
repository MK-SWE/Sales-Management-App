import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreateproductVideosInputObjectSchema: z.ZodType<Prisma.ProductCreateproductVideosInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateproductVideosInput>;
export const ProductCreateproductVideosInputObjectZodSchema = makeSchema();
