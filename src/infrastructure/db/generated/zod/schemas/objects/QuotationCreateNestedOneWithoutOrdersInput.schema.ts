import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateWithoutOrdersInputObjectSchema as QuotationCreateWithoutOrdersInputObjectSchema } from './QuotationCreateWithoutOrdersInput.schema';
import { QuotationUncheckedCreateWithoutOrdersInputObjectSchema as QuotationUncheckedCreateWithoutOrdersInputObjectSchema } from './QuotationUncheckedCreateWithoutOrdersInput.schema';
import { QuotationCreateOrConnectWithoutOrdersInputObjectSchema as QuotationCreateOrConnectWithoutOrdersInputObjectSchema } from './QuotationCreateOrConnectWithoutOrdersInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationCreateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => QuotationCreateOrConnectWithoutOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => QuotationWhereUniqueInputObjectSchema).optional()
}).strict();
export const QuotationCreateNestedOneWithoutOrdersInputObjectSchema: z.ZodType<Prisma.QuotationCreateNestedOneWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateNestedOneWithoutOrdersInput>;
export const QuotationCreateNestedOneWithoutOrdersInputObjectZodSchema = makeSchema();
