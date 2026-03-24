import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemCreateWithoutProductVariantInputObjectSchema as QuotationItemCreateWithoutProductVariantInputObjectSchema } from './QuotationItemCreateWithoutProductVariantInput.schema';
import { QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema as QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedCreateWithoutProductVariantInput.schema';
import { QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema as QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema } from './QuotationItemCreateOrConnectWithoutProductVariantInput.schema';
import { QuotationItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema as QuotationItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema } from './QuotationItemUpsertWithWhereUniqueWithoutProductVariantInput.schema';
import { QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema as QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema } from './QuotationItemCreateManyProductVariantInputEnvelope.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema as QuotationItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema } from './QuotationItemUpdateWithWhereUniqueWithoutProductVariantInput.schema';
import { QuotationItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema as QuotationItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema } from './QuotationItemUpdateManyWithWhereWithoutProductVariantInput.schema';
import { QuotationItemScalarWhereInputObjectSchema as QuotationItemScalarWhereInputObjectSchema } from './QuotationItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemCreateWithoutProductVariantInputObjectSchema).array(), z.lazy(() => QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QuotationItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QuotationItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QuotationItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QuotationItemScalarWhereInputObjectSchema), z.lazy(() => QuotationItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QuotationItemUpdateManyWithoutProductVariantNestedInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateManyWithoutProductVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateManyWithoutProductVariantNestedInput>;
export const QuotationItemUpdateManyWithoutProductVariantNestedInputObjectZodSchema = makeSchema();
