import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnCreateWithoutCreatedByUserInputObjectSchema as SaleReturnCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutCreatedByUserInput>;
export const SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
