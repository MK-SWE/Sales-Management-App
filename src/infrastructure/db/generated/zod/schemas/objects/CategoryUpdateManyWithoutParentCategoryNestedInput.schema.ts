import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutParentCategoryInputObjectSchema as CategoryCreateWithoutParentCategoryInputObjectSchema } from './CategoryCreateWithoutParentCategoryInput.schema';
import { CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema as CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedCreateWithoutParentCategoryInput.schema';
import { CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema as CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema } from './CategoryCreateOrConnectWithoutParentCategoryInput.schema';
import { CategoryUpsertWithWhereUniqueWithoutParentCategoryInputObjectSchema as CategoryUpsertWithWhereUniqueWithoutParentCategoryInputObjectSchema } from './CategoryUpsertWithWhereUniqueWithoutParentCategoryInput.schema';
import { CategoryCreateManyParentCategoryInputEnvelopeObjectSchema as CategoryCreateManyParentCategoryInputEnvelopeObjectSchema } from './CategoryCreateManyParentCategoryInputEnvelope.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithWhereUniqueWithoutParentCategoryInputObjectSchema as CategoryUpdateWithWhereUniqueWithoutParentCategoryInputObjectSchema } from './CategoryUpdateWithWhereUniqueWithoutParentCategoryInput.schema';
import { CategoryUpdateManyWithWhereWithoutParentCategoryInputObjectSchema as CategoryUpdateManyWithWhereWithoutParentCategoryInputObjectSchema } from './CategoryUpdateManyWithWhereWithoutParentCategoryInput.schema';
import { CategoryScalarWhereInputObjectSchema as CategoryScalarWhereInputObjectSchema } from './CategoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryCreateWithoutParentCategoryInputObjectSchema).array(), z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CategoryUpdateManyWithWhereWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUpdateManyWithWhereWithoutParentCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CategoryScalarWhereInputObjectSchema), z.lazy(() => CategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CategoryUpdateManyWithoutParentCategoryNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutParentCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateManyWithoutParentCategoryNestedInput>;
export const CategoryUpdateManyWithoutParentCategoryNestedInputObjectZodSchema = makeSchema();
