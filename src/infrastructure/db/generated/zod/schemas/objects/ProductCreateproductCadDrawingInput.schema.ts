import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreateproductCadDrawingInputObjectSchema: z.ZodType<Prisma.ProductCreateproductCadDrawingInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateproductCadDrawingInput>;
export const ProductCreateproductCadDrawingInputObjectZodSchema = makeSchema();
