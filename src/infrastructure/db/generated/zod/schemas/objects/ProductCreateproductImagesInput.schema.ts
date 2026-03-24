import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreateproductImagesInputObjectSchema: z.ZodType<Prisma.ProductCreateproductImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateproductImagesInput>;
export const ProductCreateproductImagesInputObjectZodSchema = makeSchema();
