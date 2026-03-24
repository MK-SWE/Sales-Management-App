import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemUpdateWithoutQuotationInputObjectSchema as QuotationItemUpdateWithoutQuotationInputObjectSchema } from './QuotationItemUpdateWithoutQuotationInput.schema';
import { QuotationItemUncheckedUpdateWithoutQuotationInputObjectSchema as QuotationItemUncheckedUpdateWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedUpdateWithoutQuotationInput.schema';
import { QuotationItemCreateWithoutQuotationInputObjectSchema as QuotationItemCreateWithoutQuotationInputObjectSchema } from './QuotationItemCreateWithoutQuotationInput.schema';
import { QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema as QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedCreateWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QuotationItemUpdateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUncheckedUpdateWithoutQuotationInputObjectSchema)]),
  create: z.union([z.lazy(() => QuotationItemCreateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema)])
}).strict();
export const QuotationItemUpsertWithWhereUniqueWithoutQuotationInputObjectSchema: z.ZodType<Prisma.QuotationItemUpsertWithWhereUniqueWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpsertWithWhereUniqueWithoutQuotationInput>;
export const QuotationItemUpsertWithWhereUniqueWithoutQuotationInputObjectZodSchema = makeSchema();
