import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutChildCategoryInputObjectSchema as ProductCreateWithoutChildCategoryInputObjectSchema } from './ProductCreateWithoutChildCategoryInput.schema';
import { ProductUncheckedCreateWithoutChildCategoryInputObjectSchema as ProductUncheckedCreateWithoutChildCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutChildCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutChildCategoryInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutChildCategoryInput>;
export const ProductCreateOrConnectWithoutChildCategoryInputObjectZodSchema = makeSchema();
