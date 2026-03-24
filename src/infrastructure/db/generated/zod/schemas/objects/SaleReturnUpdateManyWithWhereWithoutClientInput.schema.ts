import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema';
import { SaleReturnUpdateManyMutationInputObjectSchema as SaleReturnUpdateManyMutationInputObjectSchema } from './SaleReturnUpdateManyMutationInput.schema';
import { SaleReturnUncheckedUpdateManyWithoutClientInputObjectSchema as SaleReturnUncheckedUpdateManyWithoutClientInputObjectSchema } from './SaleReturnUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateManyMutationInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const SaleReturnUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutClientInput>;
export const SaleReturnUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
