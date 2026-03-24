import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateWithoutUserInputObjectSchema as QuotationCreateWithoutUserInputObjectSchema } from './QuotationCreateWithoutUserInput.schema';
import { QuotationUncheckedCreateWithoutUserInputObjectSchema as QuotationUncheckedCreateWithoutUserInputObjectSchema } from './QuotationUncheckedCreateWithoutUserInput.schema';
import { QuotationCreateOrConnectWithoutUserInputObjectSchema as QuotationCreateOrConnectWithoutUserInputObjectSchema } from './QuotationCreateOrConnectWithoutUserInput.schema';
import { QuotationCreateManyUserInputEnvelopeObjectSchema as QuotationCreateManyUserInputEnvelopeObjectSchema } from './QuotationCreateManyUserInputEnvelope.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationCreateWithoutUserInputObjectSchema), z.lazy(() => QuotationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => QuotationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuotationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => QuotationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuotationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QuotationWhereUniqueInputObjectSchema), z.lazy(() => QuotationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QuotationCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.QuotationCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateNestedManyWithoutUserInput>;
export const QuotationCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
