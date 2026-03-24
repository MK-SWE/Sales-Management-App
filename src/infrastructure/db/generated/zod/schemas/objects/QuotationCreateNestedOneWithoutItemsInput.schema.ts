import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateWithoutItemsInputObjectSchema as QuotationCreateWithoutItemsInputObjectSchema } from './QuotationCreateWithoutItemsInput.schema';
import { QuotationUncheckedCreateWithoutItemsInputObjectSchema as QuotationUncheckedCreateWithoutItemsInputObjectSchema } from './QuotationUncheckedCreateWithoutItemsInput.schema';
import { QuotationCreateOrConnectWithoutItemsInputObjectSchema as QuotationCreateOrConnectWithoutItemsInputObjectSchema } from './QuotationCreateOrConnectWithoutItemsInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationCreateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => QuotationCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => QuotationWhereUniqueInputObjectSchema).optional()
}).strict();
export const QuotationCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.QuotationCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateNestedOneWithoutItemsInput>;
export const QuotationCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
