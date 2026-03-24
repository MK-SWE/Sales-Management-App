import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationUpdateWithoutItemsInputObjectSchema as QuotationUpdateWithoutItemsInputObjectSchema } from './QuotationUpdateWithoutItemsInput.schema';
import { QuotationUncheckedUpdateWithoutItemsInputObjectSchema as QuotationUncheckedUpdateWithoutItemsInputObjectSchema } from './QuotationUncheckedUpdateWithoutItemsInput.schema';
import { QuotationCreateWithoutItemsInputObjectSchema as QuotationCreateWithoutItemsInputObjectSchema } from './QuotationCreateWithoutItemsInput.schema';
import { QuotationUncheckedCreateWithoutItemsInputObjectSchema as QuotationUncheckedCreateWithoutItemsInputObjectSchema } from './QuotationUncheckedCreateWithoutItemsInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => QuotationUpdateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => QuotationCreateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => QuotationWhereInputObjectSchema).optional()
}).strict();
export const QuotationUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.QuotationUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpsertWithoutItemsInput>;
export const QuotationUpsertWithoutItemsInputObjectZodSchema = makeSchema();
