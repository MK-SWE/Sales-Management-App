import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationUpdateWithoutOrdersInputObjectSchema as QuotationUpdateWithoutOrdersInputObjectSchema } from './QuotationUpdateWithoutOrdersInput.schema';
import { QuotationUncheckedUpdateWithoutOrdersInputObjectSchema as QuotationUncheckedUpdateWithoutOrdersInputObjectSchema } from './QuotationUncheckedUpdateWithoutOrdersInput.schema';
import { QuotationCreateWithoutOrdersInputObjectSchema as QuotationCreateWithoutOrdersInputObjectSchema } from './QuotationCreateWithoutOrdersInput.schema';
import { QuotationUncheckedCreateWithoutOrdersInputObjectSchema as QuotationUncheckedCreateWithoutOrdersInputObjectSchema } from './QuotationUncheckedCreateWithoutOrdersInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => QuotationUpdateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => QuotationCreateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutOrdersInputObjectSchema)]),
  where: z.lazy(() => QuotationWhereInputObjectSchema).optional()
}).strict();
export const QuotationUpsertWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationUpsertWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpsertWithoutOrdersInput>;
export const QuotationUpsertWithoutOrdersInputObjectZodSchema = makeSchema();
