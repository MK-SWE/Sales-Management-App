import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateWithoutChildCategoryInputObjectSchema as ProductCreateWithoutChildCategoryInputObjectSchema } from './ProductCreateWithoutChildCategoryInput.schema';
import { ProductUncheckedCreateWithoutChildCategoryInputObjectSchema as ProductUncheckedCreateWithoutChildCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutChildCategoryInput.schema';
import { ProductCreateOrConnectWithoutChildCategoryInputObjectSchema as ProductCreateOrConnectWithoutChildCategoryInputObjectSchema } from './ProductCreateOrConnectWithoutChildCategoryInput.schema';
import { ProductCreateManyChildCategoryInputEnvelopeObjectSchema as ProductCreateManyChildCategoryInputEnvelopeObjectSchema } from './ProductCreateManyChildCategoryInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductCreateWithoutChildCategoryInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutChildCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutChildCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyChildCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductCreateNestedManyWithoutChildCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutChildCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedManyWithoutChildCategoryInput>;
export const ProductCreateNestedManyWithoutChildCategoryInputObjectZodSchema = makeSchema();
