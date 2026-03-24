import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutCreatedByUserInputObjectSchema as SaleReturnUpdateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUpdateWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedUpdateWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutCreatedByUserInput.schema';
import { SaleReturnCreateWithoutCreatedByUserInputObjectSchema as SaleReturnCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleReturnUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
