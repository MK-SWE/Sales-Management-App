import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutClientInputObjectSchema as SaleReturnUpdateWithoutClientInputObjectSchema } from './SaleReturnUpdateWithoutClientInput.schema';
import { SaleReturnUncheckedUpdateWithoutClientInputObjectSchema as SaleReturnUncheckedUpdateWithoutClientInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutClientInput.schema';
import { SaleReturnCreateWithoutClientInputObjectSchema as SaleReturnCreateWithoutClientInputObjectSchema } from './SaleReturnCreateWithoutClientInput.schema';
import { SaleReturnUncheckedCreateWithoutClientInputObjectSchema as SaleReturnUncheckedCreateWithoutClientInputObjectSchema } from './SaleReturnUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleReturnUpdateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SaleReturnUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutClientInput>;
export const SaleReturnUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
