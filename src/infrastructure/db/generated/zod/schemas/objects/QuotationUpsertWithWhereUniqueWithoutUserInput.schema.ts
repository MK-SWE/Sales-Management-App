import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationUpdateWithoutUserInputObjectSchema as QuotationUpdateWithoutUserInputObjectSchema } from './QuotationUpdateWithoutUserInput.schema';
import { QuotationUncheckedUpdateWithoutUserInputObjectSchema as QuotationUncheckedUpdateWithoutUserInputObjectSchema } from './QuotationUncheckedUpdateWithoutUserInput.schema';
import { QuotationCreateWithoutUserInputObjectSchema as QuotationCreateWithoutUserInputObjectSchema } from './QuotationCreateWithoutUserInput.schema';
import { QuotationUncheckedCreateWithoutUserInputObjectSchema as QuotationUncheckedCreateWithoutUserInputObjectSchema } from './QuotationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QuotationUpdateWithoutUserInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => QuotationCreateWithoutUserInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const QuotationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.QuotationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpsertWithWhereUniqueWithoutUserInput>;
export const QuotationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
