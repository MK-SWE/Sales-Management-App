import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutParentCategoryInputObjectSchema as CategoryCreateWithoutParentCategoryInputObjectSchema } from './CategoryCreateWithoutParentCategoryInput.schema';
import { CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema as CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema } from './CategoryUncheckedCreateWithoutParentCategoryInput.schema';
import { CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema as CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema } from './CategoryCreateOrConnectWithoutParentCategoryInput.schema';
import { CategoryCreateManyParentCategoryInputEnvelopeObjectSchema as CategoryCreateManyParentCategoryInputEnvelopeObjectSchema } from './CategoryCreateManyParentCategoryInputEnvelope.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryCreateWithoutParentCategoryInputObjectSchema).array(), z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema), z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CategoryCreateNestedManyWithoutParentCategoryInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutParentCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedManyWithoutParentCategoryInput>;
export const CategoryCreateNestedManyWithoutParentCategoryInputObjectZodSchema = makeSchema();
