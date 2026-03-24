import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateWithoutItemsInputObjectSchema as QuotationCreateWithoutItemsInputObjectSchema } from './QuotationCreateWithoutItemsInput.schema';
import { QuotationUncheckedCreateWithoutItemsInputObjectSchema as QuotationUncheckedCreateWithoutItemsInputObjectSchema } from './QuotationUncheckedCreateWithoutItemsInput.schema';
import { QuotationCreateOrConnectWithoutItemsInputObjectSchema as QuotationCreateOrConnectWithoutItemsInputObjectSchema } from './QuotationCreateOrConnectWithoutItemsInput.schema';
import { QuotationUpsertWithoutItemsInputObjectSchema as QuotationUpsertWithoutItemsInputObjectSchema } from './QuotationUpsertWithoutItemsInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './QuotationWhereUniqueInput.schema';
import { QuotationUpdateToOneWithWhereWithoutItemsInputObjectSchema as QuotationUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './QuotationUpdateToOneWithWhereWithoutItemsInput.schema';
import { QuotationUpdateWithoutItemsInputObjectSchema as QuotationUpdateWithoutItemsInputObjectSchema } from './QuotationUpdateWithoutItemsInput.schema';
import { QuotationUncheckedUpdateWithoutItemsInputObjectSchema as QuotationUncheckedUpdateWithoutItemsInputObjectSchema } from './QuotationUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuotationCreateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => QuotationCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => QuotationUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => QuotationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => QuotationUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => QuotationUpdateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const QuotationUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.QuotationUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateOneRequiredWithoutItemsNestedInput>;
export const QuotationUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
