import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateWithoutUserInputObjectSchema as QuotationCreateWithoutUserInputObjectSchema } from './QuotationCreateWithoutUserInput.schema';
import { QuotationUncheckedCreateWithoutUserInputObjectSchema as QuotationUncheckedCreateWithoutUserInputObjectSchema } from './QuotationUncheckedCreateWithoutUserInput.schema';
import { QuotationCreateOrConnectWithoutUserInputObjectSchema as QuotationCreateOrConnectWithoutUserInputObjectSchema } from './QuotationCreateOrConnectWithoutUserInput.schema';
import { QuotationUpsertWithWhereUniqueWithoutUserInputObjectSchema as QuotationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './QuotationUpsertWithWhereUniqueWithoutUserInput.schema';
import { QuotationCreateManyUserInputEnvelopeObjectSchema as QuotationCreateManyUserInputEnvelopeObjectSchema } from './QuotationCreateManyUserInputEnvelope.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationUpdateWithWhereUniqueWithoutUserInputObjectSchema as QuotationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './QuotationUpdateWithWhereUniqueWithoutUserInput.schema';
import { QuotationUpdateManyWithWhereWithoutUserInputObjectSchema as QuotationUpdateManyWithWhereWithoutUserInputObjectSchema } from './QuotationUpdateManyWithWhereWithoutUserInput.schema';
import { QuotationScalarWhereInputObjectSchema as QuotationScalarWhereInputObjectSchema } from './QuotationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationCreateWithoutUserInputObjectSchema), z.lazy(() => QuotationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => QuotationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuotationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => QuotationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QuotationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => QuotationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuotationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QuotationWhereUniqueInputObjectSchema), z.lazy(() => QuotationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QuotationWhereUniqueInputObjectSchema), z.lazy(() => QuotationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QuotationWhereUniqueInputObjectSchema), z.lazy(() => QuotationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QuotationWhereUniqueInputObjectSchema), z.lazy(() => QuotationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QuotationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => QuotationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QuotationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => QuotationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QuotationScalarWhereInputObjectSchema), z.lazy(() => QuotationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QuotationUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.QuotationUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUncheckedUpdateManyWithoutUserNestedInput>;
export const QuotationUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
