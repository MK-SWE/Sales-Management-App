import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationCreateWithoutItemsInputObjectSchema as QuotationCreateWithoutItemsInputObjectSchema } from './QuotationCreateWithoutItemsInput.schema';
import { QuotationUncheckedCreateWithoutItemsInputObjectSchema as QuotationUncheckedCreateWithoutItemsInputObjectSchema } from './QuotationUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuotationCreateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const QuotationCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.QuotationCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateOrConnectWithoutItemsInput>;
export const QuotationCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
