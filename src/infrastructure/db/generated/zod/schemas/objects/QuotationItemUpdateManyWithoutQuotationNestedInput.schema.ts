import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemCreateWithoutQuotationInputObjectSchema as QuotationItemCreateWithoutQuotationInputObjectSchema } from './QuotationItemCreateWithoutQuotationInput.schema';
import { QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema as QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedCreateWithoutQuotationInput.schema';
import { QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema as QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema } from './QuotationItemCreateOrConnectWithoutQuotationInput.schema';
import { QuotationItemUpsertWithWhereUniqueWithoutQuotationInputObjectSchema as QuotationItemUpsertWithWhereUniqueWithoutQuotationInputObjectSchema } from './QuotationItemUpsertWithWhereUniqueWithoutQuotationInput.schema';
import { QuotationItemCreateManyQuotationInputEnvelopeObjectSchema as QuotationItemCreateManyQuotationInputEnvelopeObjectSchema } from './QuotationItemCreateManyQuotationInputEnvelope.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemUpdateWithWhereUniqueWithoutQuotationInputObjectSchema as QuotationItemUpdateWithWhereUniqueWithoutQuotationInputObjectSchema } from './QuotationItemUpdateWithWhereUniqueWithoutQuotationInput.schema';
import { QuotationItemUpdateManyWithWhereWithoutQuotationInputObjectSchema as QuotationItemUpdateManyWithWhereWithoutQuotationInputObjectSchema } from './QuotationItemUpdateManyWithWhereWithoutQuotationInput.schema';
import { QuotationItemScalarWhereInputObjectSchema as QuotationItemScalarWhereInputObjectSchema } from './QuotationItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationItemCreateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemCreateWithoutQuotationInputObjectSchema).array(), z.lazy(() => QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QuotationItemUpsertWithWhereUniqueWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUpsertWithWhereUniqueWithoutQuotationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuotationItemCreateManyQuotationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QuotationItemUpdateWithWhereUniqueWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUpdateWithWhereUniqueWithoutQuotationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QuotationItemUpdateManyWithWhereWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUpdateManyWithWhereWithoutQuotationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QuotationItemScalarWhereInputObjectSchema), z.lazy(() => QuotationItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QuotationItemUpdateManyWithoutQuotationNestedInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateManyWithoutQuotationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateManyWithoutQuotationNestedInput>;
export const QuotationItemUpdateManyWithoutQuotationNestedInputObjectZodSchema = makeSchema();
