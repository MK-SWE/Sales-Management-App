import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateWithoutChildCategoryInputObjectSchema as ProductCreateWithoutChildCategoryInputObjectSchema } from './ProductCreateWithoutChildCategoryInput.schema';
import { ProductUncheckedCreateWithoutChildCategoryInputObjectSchema as ProductUncheckedCreateWithoutChildCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutChildCategoryInput.schema';
import { ProductCreateOrConnectWithoutChildCategoryInputObjectSchema as ProductCreateOrConnectWithoutChildCategoryInputObjectSchema } from './ProductCreateOrConnectWithoutChildCategoryInput.schema';
import { ProductUpsertWithWhereUniqueWithoutChildCategoryInputObjectSchema as ProductUpsertWithWhereUniqueWithoutChildCategoryInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutChildCategoryInput.schema';
import { ProductCreateManyChildCategoryInputEnvelopeObjectSchema as ProductCreateManyChildCategoryInputEnvelopeObjectSchema } from './ProductCreateManyChildCategoryInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutChildCategoryInputObjectSchema as ProductUpdateWithWhereUniqueWithoutChildCategoryInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutChildCategoryInput.schema';
import { ProductUpdateManyWithWhereWithoutChildCategoryInputObjectSchema as ProductUpdateManyWithWhereWithoutChildCategoryInputObjectSchema } from './ProductUpdateManyWithWhereWithoutChildCategoryInput.schema';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductCreateWithoutChildCategoryInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutChildCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutChildCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductUpsertWithWhereUniqueWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutChildCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyChildCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductUpdateWithWhereUniqueWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutChildCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductUpdateManyWithWhereWithoutChildCategoryInputObjectSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutChildCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductUpdateManyWithoutChildCategoryNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateManyWithoutChildCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateManyWithoutChildCategoryNestedInput>;
export const ProductUpdateManyWithoutChildCategoryNestedInputObjectZodSchema = makeSchema();
