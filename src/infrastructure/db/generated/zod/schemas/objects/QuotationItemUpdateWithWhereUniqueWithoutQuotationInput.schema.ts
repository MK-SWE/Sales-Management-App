import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemUpdateWithoutQuotationInputObjectSchema as QuotationItemUpdateWithoutQuotationInputObjectSchema } from './QuotationItemUpdateWithoutQuotationInput.schema';
import { QuotationItemUncheckedUpdateWithoutQuotationInputObjectSchema as QuotationItemUncheckedUpdateWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedUpdateWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QuotationItemUpdateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUncheckedUpdateWithoutQuotationInputObjectSchema)])
}).strict();
export const QuotationItemUpdateWithWhereUniqueWithoutQuotationInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateWithWhereUniqueWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateWithWhereUniqueWithoutQuotationInput>;
export const QuotationItemUpdateWithWhereUniqueWithoutQuotationInputObjectZodSchema = makeSchema();
