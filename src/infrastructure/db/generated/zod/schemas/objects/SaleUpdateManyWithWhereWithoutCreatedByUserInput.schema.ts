import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleScalarWhereInputObjectSchema as SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';
import { SaleUpdateManyMutationInputObjectSchema as SaleUpdateManyMutationInputObjectSchema } from './SaleUpdateManyMutationInput.schema';
import { SaleUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as SaleUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleUpdateManyMutationInputObjectSchema), z.lazy(() => SaleUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutCreatedByUserInput>;
export const SaleUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
