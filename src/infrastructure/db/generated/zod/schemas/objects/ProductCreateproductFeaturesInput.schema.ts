import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreateproductFeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreateproductFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateproductFeaturesInput>;
export const ProductCreateproductFeaturesInputObjectZodSchema = makeSchema();
