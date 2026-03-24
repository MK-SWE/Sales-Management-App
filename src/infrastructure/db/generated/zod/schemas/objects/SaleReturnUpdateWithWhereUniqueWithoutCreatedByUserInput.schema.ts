import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutCreatedByUserInputObjectSchema as SaleReturnUpdateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUpdateWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedUpdateWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
