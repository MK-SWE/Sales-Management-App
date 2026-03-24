import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema';
import { QuotationUpdateWithoutOrdersInputObjectSchema as QuotationUpdateWithoutOrdersInputObjectSchema } from './QuotationUpdateWithoutOrdersInput.schema';
import { QuotationUncheckedUpdateWithoutOrdersInputObjectSchema as QuotationUncheckedUpdateWithoutOrdersInputObjectSchema } from './QuotationUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => QuotationUpdateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutOrdersInputObjectSchema)])
}).strict();
export const QuotationUpdateToOneWithWhereWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationUpdateToOneWithWhereWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateToOneWithWhereWithoutOrdersInput>;
export const QuotationUpdateToOneWithWhereWithoutOrdersInputObjectZodSchema = makeSchema();
