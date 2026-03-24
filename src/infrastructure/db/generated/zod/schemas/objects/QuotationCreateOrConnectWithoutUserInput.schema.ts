import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationCreateWithoutUserInputObjectSchema as QuotationCreateWithoutUserInputObjectSchema } from './QuotationCreateWithoutUserInput.schema';
import { QuotationUncheckedCreateWithoutUserInputObjectSchema as QuotationUncheckedCreateWithoutUserInputObjectSchema } from './QuotationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuotationCreateWithoutUserInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const QuotationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.QuotationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateOrConnectWithoutUserInput>;
export const QuotationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
