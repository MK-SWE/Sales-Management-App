import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutChildCategoryInputObjectSchema as ProductUncheckedUpdateManyWithoutChildCategoryInputObjectSchema } from './ProductUncheckedUpdateManyWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutChildCategoryInputObjectSchema)])
}).strict();
export const ProductUpdateManyWithWhereWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutChildCategoryInput>;
export const ProductUpdateManyWithWhereWithoutChildCategoryInputObjectZodSchema = makeSchema();
