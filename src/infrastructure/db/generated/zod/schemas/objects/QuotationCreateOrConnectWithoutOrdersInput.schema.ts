import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationCreateWithoutOrdersInputObjectSchema as QuotationCreateWithoutOrdersInputObjectSchema } from './QuotationCreateWithoutOrdersInput.schema';
import { QuotationUncheckedCreateWithoutOrdersInputObjectSchema as QuotationUncheckedCreateWithoutOrdersInputObjectSchema } from './QuotationUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuotationCreateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const QuotationCreateOrConnectWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationCreateOrConnectWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateOrConnectWithoutOrdersInput>;
export const QuotationCreateOrConnectWithoutOrdersInputObjectZodSchema = makeSchema();
