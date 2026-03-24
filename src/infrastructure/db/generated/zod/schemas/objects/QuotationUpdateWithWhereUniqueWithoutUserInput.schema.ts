import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationUpdateWithoutUserInputObjectSchema as QuotationUpdateWithoutUserInputObjectSchema } from './QuotationUpdateWithoutUserInput.schema';
import { QuotationUncheckedUpdateWithoutUserInputObjectSchema as QuotationUncheckedUpdateWithoutUserInputObjectSchema } from './QuotationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QuotationUpdateWithoutUserInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const QuotationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.QuotationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateWithWhereUniqueWithoutUserInput>;
export const QuotationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
