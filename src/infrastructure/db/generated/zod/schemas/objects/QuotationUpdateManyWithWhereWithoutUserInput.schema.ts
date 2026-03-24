import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationScalarWhereInputObjectSchema as QuotationScalarWhereInputObjectSchema } from './QuotationScalarWhereInput.schema';
import { QuotationUpdateManyMutationInputObjectSchema as QuotationUpdateManyMutationInputObjectSchema } from './QuotationUpdateManyMutationInput.schema';
import { QuotationUncheckedUpdateManyWithoutUserInputObjectSchema as QuotationUncheckedUpdateManyWithoutUserInputObjectSchema } from './QuotationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuotationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QuotationUpdateManyMutationInputObjectSchema), z.lazy(() => QuotationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const QuotationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.QuotationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationUpdateManyWithWhereWithoutUserInput>;
export const QuotationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
