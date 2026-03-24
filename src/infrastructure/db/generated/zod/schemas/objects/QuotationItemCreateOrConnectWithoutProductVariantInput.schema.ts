import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemCreateWithoutProductVariantInputObjectSchema as QuotationItemCreateWithoutProductVariantInputObjectSchema } from './QuotationItemCreateWithoutProductVariantInput.schema';
import { QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema as QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedCreateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuotationItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema)])
}).strict();
export const QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.QuotationItemCreateOrConnectWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemCreateOrConnectWithoutProductVariantInput>;
export const QuotationItemCreateOrConnectWithoutProductVariantInputObjectZodSchema = makeSchema();
