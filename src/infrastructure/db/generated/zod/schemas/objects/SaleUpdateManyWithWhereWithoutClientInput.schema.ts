import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleScalarWhereInputObjectSchema as SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';
import { SaleUpdateManyMutationInputObjectSchema as SaleUpdateManyMutationInputObjectSchema } from './SaleUpdateManyMutationInput.schema';
import { SaleUncheckedUpdateManyWithoutClientInputObjectSchema as SaleUncheckedUpdateManyWithoutClientInputObjectSchema } from './SaleUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleUpdateManyMutationInputObjectSchema), z.lazy(() => SaleUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const SaleUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutClientInput>;
export const SaleUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
