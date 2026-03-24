import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemCreateWithoutProductVariantInputObjectSchema as QuotationItemCreateWithoutProductVariantInputObjectSchema } from './QuotationItemCreateWithoutProductVariantInput.schema';
import { QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema as QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedCreateWithoutProductVariantInput.schema';
import { QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema as QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema } from './QuotationItemCreateOrConnectWithoutProductVariantInput.schema';
import { QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema as QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema } from './QuotationItemCreateManyProductVariantInputEnvelope.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemCreateWithoutProductVariantInputObjectSchema).array(), z.lazy(() => QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutProductVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema), z.lazy(() => QuotationItemCreateOrConnectWithoutProductVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QuotationItemCreateNestedManyWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.QuotationItemCreateNestedManyWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemCreateNestedManyWithoutProductVariantInput>;
export const QuotationItemCreateNestedManyWithoutProductVariantInputObjectZodSchema = makeSchema();
