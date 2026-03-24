import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateNestedManyWithoutBrandInputObjectSchema as ProductCreateNestedManyWithoutBrandInputObjectSchema } from './ProductCreateNestedManyWithoutBrandInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutBrandInputObjectSchema).optional()
}).strict();
export const BrandCreateInputObjectSchema: z.ZodType<Prisma.BrandCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandCreateInput>;
export const BrandCreateInputObjectZodSchema = makeSchema();
