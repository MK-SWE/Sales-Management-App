import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutWarehouseInputObjectSchema as SaleReturnCreateWithoutWarehouseInputObjectSchema } from './SaleReturnCreateWithoutWarehouseInput.schema';
import { SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema as SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedCreateWithoutWarehouseInput.schema';
import { SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema as SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema } from './SaleReturnCreateOrConnectWithoutWarehouseInput.schema';
import { SaleReturnUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema as SaleReturnUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema } from './SaleReturnUpsertWithWhereUniqueWithoutWarehouseInput.schema';
import { SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema as SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema } from './SaleReturnCreateManyWarehouseInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema as SaleReturnUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema } from './SaleReturnUpdateWithWhereUniqueWithoutWarehouseInput.schema';
import { SaleReturnUpdateManyWithWhereWithoutWarehouseInputObjectSchema as SaleReturnUpdateManyWithWhereWithoutWarehouseInputObjectSchema } from './SaleReturnUpdateManyWithWhereWithoutWarehouseInput.schema';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleReturnUpdateManyWithWhereWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUpdateManyWithWhereWithoutWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleReturnScalarWhereInputObjectSchema), z.lazy(() => SaleReturnScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUpdateManyWithoutWarehouseNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateManyWithoutWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyWithoutWarehouseNestedInput>;
export const SaleReturnUpdateManyWithoutWarehouseNestedInputObjectZodSchema = makeSchema();
