import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutClientInputObjectSchema as SaleReturnCreateWithoutClientInputObjectSchema } from './SaleReturnCreateWithoutClientInput.schema';
import { SaleReturnUncheckedCreateWithoutClientInputObjectSchema as SaleReturnUncheckedCreateWithoutClientInputObjectSchema } from './SaleReturnUncheckedCreateWithoutClientInput.schema';
import { SaleReturnCreateOrConnectWithoutClientInputObjectSchema as SaleReturnCreateOrConnectWithoutClientInputObjectSchema } from './SaleReturnCreateOrConnectWithoutClientInput.schema';
import { SaleReturnCreateManyClientInputEnvelopeObjectSchema as SaleReturnCreateManyClientInputEnvelopeObjectSchema } from './SaleReturnCreateManyClientInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleReturnUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUncheckedCreateNestedManyWithoutClientInput>;
export const SaleReturnUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
