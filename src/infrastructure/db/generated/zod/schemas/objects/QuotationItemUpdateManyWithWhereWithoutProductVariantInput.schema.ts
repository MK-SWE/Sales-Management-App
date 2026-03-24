import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemScalarWhereInputObjectSchema as QuotationItemScalarWhereInputObjectSchema } from './QuotationItemScalarWhereInput.schema';
import { QuotationItemUpdateManyMutationInputObjectSchema as QuotationItemUpdateManyMutationInputObjectSchema } from './QuotationItemUpdateManyMutationInput.schema';
import { QuotationItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema as QuotationItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedUpdateManyWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QuotationItemUpdateManyMutationInputObjectSchema), z.lazy(() => QuotationItemUncheckedUpdateManyWithoutProductVariantInputObjectSchema)])
}).strict();
export const QuotationItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateManyWithWhereWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateManyWithWhereWithoutProductVariantInput>;
export const QuotationItemUpdateManyWithWhereWithoutProductVariantInputObjectZodSchema = makeSchema();
