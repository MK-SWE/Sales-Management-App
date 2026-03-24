import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './QuotationWhereInput.schema';
import { QuotationUpdateWithoutItemsInputObjectSchema as QuotationUpdateWithoutItemsInputObjectSchema } from './QuotationUpdateWithoutItemsInput.schema';
import { QuotationUncheckedUpdateWithoutItemsInputObjectSchema as QuotationUncheckedUpdateWithoutItemsInputObjectSchema } from './QuotationUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => QuotationUpdateWithoutItemsInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const QuotationUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.QuotationUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateToOneWithWhereWithoutItemsInput>;
export const QuotationUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
