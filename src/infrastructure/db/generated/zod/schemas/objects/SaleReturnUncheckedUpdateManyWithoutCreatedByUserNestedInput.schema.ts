import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutCreatedByUserInputObjectSchema as SaleReturnCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedCreateWithoutCreatedByUserInput.schema';
import { SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema as SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateOrConnectWithoutCreatedByUserInput.schema';
import { SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema as SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema } from './SaleReturnCreateManyCreatedByUserInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { SaleReturnUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as SaleReturnUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './SaleReturnUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleReturnUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleReturnScalarWhereInputObjectSchema), z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInput>;
export const SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
