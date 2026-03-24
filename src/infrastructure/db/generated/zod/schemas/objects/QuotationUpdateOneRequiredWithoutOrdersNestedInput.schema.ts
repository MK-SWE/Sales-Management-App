import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateWithoutOrdersInputObjectSchema as QuotationCreateWithoutOrdersInputObjectSchema } from './QuotationCreateWithoutOrdersInput.schema';
import { QuotationUncheckedCreateWithoutOrdersInputObjectSchema as QuotationUncheckedCreateWithoutOrdersInputObjectSchema } from './QuotationUncheckedCreateWithoutOrdersInput.schema';
import { QuotationCreateOrConnectWithoutOrdersInputObjectSchema as QuotationCreateOrConnectWithoutOrdersInputObjectSchema } from './QuotationCreateOrConnectWithoutOrdersInput.schema';
import { QuotationUpsertWithoutOrdersInputObjectSchema as QuotationUpsertWithoutOrdersInputObjectSchema } from './QuotationUpsertWithoutOrdersInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationUpdateToOneWithWhereWithoutOrdersInputObjectSchema as QuotationUpdateToOneWithWhereWithoutOrdersInputObjectSchema } from './QuotationUpdateToOneWithWhereWithoutOrdersInput.schema';
import { QuotationUpdateWithoutOrdersInputObjectSchema as QuotationUpdateWithoutOrdersInputObjectSchema } from './QuotationUpdateWithoutOrdersInput.schema';
import { QuotationUncheckedUpdateWithoutOrdersInputObjectSchema as QuotationUncheckedUpdateWithoutOrdersInputObjectSchema } from './QuotationUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationCreateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => QuotationCreateOrConnectWithoutOrdersInputObjectSchema).optional(),
  upsert: z.lazy(() => QuotationUpsertWithoutOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => QuotationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => QuotationUpdateToOneWithWhereWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUpdateWithoutOrdersInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutOrdersInputObjectSchema)]).optional()
}).strict();
export const QuotationUpdateOneRequiredWithoutOrdersNestedInputObjectSchema: z.ZodType<Prisma.QuotationUpdateOneRequiredWithoutOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateOneRequiredWithoutOrdersNestedInput>;
export const QuotationUpdateOneRequiredWithoutOrdersNestedInputObjectZodSchema = makeSchema();
