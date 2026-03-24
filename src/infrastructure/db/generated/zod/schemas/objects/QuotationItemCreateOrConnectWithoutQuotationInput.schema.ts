import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema';
import { QuotationItemCreateWithoutQuotationInputObjectSchema as QuotationItemCreateWithoutQuotationInputObjectSchema } from './QuotationItemCreateWithoutQuotationInput.schema';
import { QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema as QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedCreateWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuotationItemCreateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema)])
}).strict();
export const QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema: z.ZodType<Prisma.QuotationItemCreateOrConnectWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemCreateOrConnectWithoutQuotationInput>;
export const QuotationItemCreateOrConnectWithoutQuotationInputObjectZodSchema = makeSchema();
