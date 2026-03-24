import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreateproductCatalogueInputObjectSchema: z.ZodType<Prisma.ProductCreateproductCatalogueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateproductCatalogueInput>;
export const ProductCreateproductCatalogueInputObjectZodSchema = makeSchema();
