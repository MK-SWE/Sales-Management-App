import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnCreateWithoutClientInputObjectSchema as SaleReturnCreateWithoutClientInputObjectSchema } from './SaleReturnCreateWithoutClientInput.schema';
import { SaleReturnUncheckedCreateWithoutClientInputObjectSchema as SaleReturnUncheckedCreateWithoutClientInputObjectSchema } from './SaleReturnUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SaleReturnCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutClientInput>;
export const SaleReturnCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
