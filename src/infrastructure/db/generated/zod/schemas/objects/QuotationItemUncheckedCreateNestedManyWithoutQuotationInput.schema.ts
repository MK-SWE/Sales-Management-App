import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemCreateWithoutQuotationInputObjectSchema as QuotationItemCreateWithoutQuotationInputObjectSchema } from './QuotationItemCreateWithoutQuotationInput.schema';
import { QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema as QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedCreateWithoutQuotationInput.schema';
import { QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema as QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema } from './QuotationItemCreateOrConnectWithoutQuotationInput.schema';
import { QuotationItemCreateManyQuotationInputEnvelopeObjectSchema as QuotationItemCreateManyQuotationInputEnvelopeObjectSchema } from './QuotationItemCreateManyQuotationInputEnvelope.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './QuotationItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationItemCreateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemCreateWithoutQuotationInputObjectSchema).array(), z.lazy(() => QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemUncheckedCreateWithoutQuotationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema), z.lazy(() => QuotationItemCreateOrConnectWithoutQuotationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuotationItemCreateManyQuotationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QuotationItemWhereUniqueInputObjectSchema), z.lazy(() => QuotationItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectSchema: z.ZodType<Prisma.QuotationItemUncheckedCreateNestedManyWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUncheckedCreateNestedManyWithoutQuotationInput>;
export const QuotationItemUncheckedCreateNestedManyWithoutQuotationInputObjectZodSchema = makeSchema();
