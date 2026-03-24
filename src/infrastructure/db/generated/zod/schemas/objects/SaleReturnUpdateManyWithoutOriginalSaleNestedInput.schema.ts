import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutOriginalSaleInputObjectSchema as SaleReturnCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateWithoutOriginalSaleInput.schema';
import { SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedCreateWithoutOriginalSaleInput.schema';
import { SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema as SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateOrConnectWithoutOriginalSaleInput.schema';
import { SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInputObjectSchema as SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInputObjectSchema } from './SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInput.schema';
import { SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema as SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema } from './SaleReturnCreateManyOriginalSaleInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInputObjectSchema as SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInputObjectSchema } from './SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInput.schema';
import { SaleReturnUpdateManyWithWhereWithoutOriginalSaleInputObjectSchema as SaleReturnUpdateManyWithWhereWithoutOriginalSaleInputObjectSchema } from './SaleReturnUpdateManyWithWhereWithoutOriginalSaleInput.schema';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutOriginalSaleInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleReturnUpdateManyWithWhereWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUpdateManyWithWhereWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleReturnScalarWhereInputObjectSchema), z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUpdateManyWithoutOriginalSaleNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateManyWithoutOriginalSaleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyWithoutOriginalSaleNestedInput>;
export const SaleReturnUpdateManyWithoutOriginalSaleNestedInputObjectZodSchema = makeSchema();
