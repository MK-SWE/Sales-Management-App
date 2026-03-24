import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutClientInputObjectSchema as SaleReturnCreateWithoutClientInputObjectSchema } from './SaleReturnCreateWithoutClientInput.schema';
import { SaleReturnUncheckedCreateWithoutClientInputObjectSchema as SaleReturnUncheckedCreateWithoutClientInputObjectSchema } from './SaleReturnUncheckedCreateWithoutClientInput.schema';
import { SaleReturnCreateOrConnectWithoutClientInputObjectSchema as SaleReturnCreateOrConnectWithoutClientInputObjectSchema } from './SaleReturnCreateOrConnectWithoutClientInput.schema';
import { SaleReturnUpsertWithWhereUniqueWithoutClientInputObjectSchema as SaleReturnUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './SaleReturnUpsertWithWhereUniqueWithoutClientInput.schema';
import { SaleReturnCreateManyClientInputEnvelopeObjectSchema as SaleReturnCreateManyClientInputEnvelopeObjectSchema } from './SaleReturnCreateManyClientInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithWhereUniqueWithoutClientInputObjectSchema as SaleReturnUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './SaleReturnUpdateWithWhereUniqueWithoutClientInput.schema';
import { SaleReturnUpdateManyWithWhereWithoutClientInputObjectSchema as SaleReturnUpdateManyWithWhereWithoutClientInputObjectSchema } from './SaleReturnUpdateManyWithWhereWithoutClientInput.schema';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleReturnUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => SaleReturnUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleReturnScalarWhereInputObjectSchema), z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUncheckedUpdateManyWithoutClientNestedInput>;
export const SaleReturnUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
