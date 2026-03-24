import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductUncheckedCreateNestedManyWithoutBrandInputObjectSchema as ProductUncheckedCreateNestedManyWithoutBrandInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBrandInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutBrandInputObjectSchema).optional()
}).strict();
export const BrandUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BrandUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandUncheckedCreateInput>;
export const BrandUncheckedCreateInputObjectZodSchema = makeSchema();
