import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemScalarWhereInputObjectSchema as QuotationItemScalarWhereInputObjectSchema } from './QuotationItemScalarWhereInput.schema';
import { QuotationItemUpdateManyMutationInputObjectSchema as QuotationItemUpdateManyMutationInputObjectSchema } from './QuotationItemUpdateManyMutationInput.schema';
import { QuotationItemUncheckedUpdateManyWithoutQuotationInputObjectSchema as QuotationItemUncheckedUpdateManyWithoutQuotationInputObjectSchema } from './QuotationItemUncheckedUpdateManyWithoutQuotationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QuotationItemUpdateManyMutationInputObjectSchema), z.lazy(() => QuotationItemUncheckedUpdateManyWithoutQuotationInputObjectSchema)])
}).strict();
export const QuotationItemUpdateManyWithWhereWithoutQuotationInputObjectSchema: z.ZodType<Prisma.QuotationItemUpdateManyWithWhereWithoutQuotationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemUpdateManyWithWhereWithoutQuotationInput>;
export const QuotationItemUpdateManyWithWhereWithoutQuotationInputObjectZodSchema = makeSchema();
