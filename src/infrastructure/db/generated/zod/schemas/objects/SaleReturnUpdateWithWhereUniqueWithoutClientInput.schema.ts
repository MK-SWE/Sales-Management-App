import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutClientInputObjectSchema as SaleReturnUpdateWithoutClientInputObjectSchema } from './SaleReturnUpdateWithoutClientInput.schema';
import { SaleReturnUncheckedUpdateWithoutClientInputObjectSchema as SaleReturnUncheckedUpdateWithoutClientInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const SaleReturnUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutClientInput>;
export const SaleReturnUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
