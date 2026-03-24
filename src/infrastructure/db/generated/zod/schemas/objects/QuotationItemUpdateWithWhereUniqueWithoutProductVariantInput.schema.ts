import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemUpdateWithoutProductVariantInputObjectSchema as QuotationItemUpdateWithoutProductVariantInputObjectSchema } from './QuotationItemUpdateWithoutProductVariantInput.schema';
import { QuotationItemUncheckedUpdateWithoutProductVariantInputObjectSchema as QuotationItemUncheckedUpdateWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedUpdateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QuotationItemUpdateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUncheckedUpdateWithoutProductVariantInputObjectSchema)])
}).strict();
export const QuotationItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateWithWhereUniqueWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateWithWhereUniqueWithoutProductVariantInput>;
export const QuotationItemUpdateWithWhereUniqueWithoutProductVariantInputObjectZodSchema = makeSchema();
