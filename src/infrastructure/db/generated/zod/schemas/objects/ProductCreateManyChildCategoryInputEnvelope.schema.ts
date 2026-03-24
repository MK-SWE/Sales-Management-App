import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateManyChildCategoryInputObjectSchema as ProductCreateManyChildCategoryInputObjectSchema } from './ProductCreateManyChildCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductCreateManyChildCategoryInputObjectSchema), z.lazy(() => ProductCreateManyChildCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductCreateManyChildCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductCreateManyChildCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyChildCategoryInputEnvelope>;
export const ProductCreateManyChildCategoryInputEnvelopeObjectZodSchema = makeSchema();
