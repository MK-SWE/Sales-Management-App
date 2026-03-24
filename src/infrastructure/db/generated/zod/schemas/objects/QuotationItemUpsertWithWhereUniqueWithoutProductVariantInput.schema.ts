import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemUpdateWithoutProductVariantInputObjectSchema as QuotationItemUpdateWithoutProductVariantInputObjectSchema } from './QuotationItemUpdateWithoutProductVariantInput.schema';
import { QuotationItemUncheckedUpdateWithoutProductVariantInputObjectSchema as QuotationItemUncheckedUpdateWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedUpdateWithoutProductVariantInput.schema';
import { QuotationItemCreateWithoutProductVariantInputObjectSchema as QuotationItemCreateWithoutProductVariantInputObjectSchema } from './QuotationItemCreateWithoutProductVariantInput.schema';
import { QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema as QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedCreateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QuotationItemUpdateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUncheckedUpdateWithoutProductVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => QuotationItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema)])
}).strict();
export const QuotationItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.QuotationItemUpsertWithWhereUniqueWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpsertWithWhereUniqueWithoutProductVariantInput>;
export const QuotationItemUpsertWithWhereUniqueWithoutProductVariantInputObjectZodSchema = makeSchema();
