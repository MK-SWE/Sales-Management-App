import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutWarehouseInputObjectSchema as SaleCreateWithoutWarehouseInputObjectSchema } from './SaleCreateWithoutWarehouseInput.schema';
import { SaleUncheckedCreateWithoutWarehouseInputObjectSchema as SaleUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleUncheckedCreateWithoutWarehouseInput.schema';
import { SaleCreateOrConnectWithoutWarehouseInputObjectSchema as SaleCreateOrConnectWithoutWarehouseInputObjectSchema } from './SaleCreateOrConnectWithoutWarehouseInput.schema';
import { SaleUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema as SaleUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutWarehouseInput.schema';
import { SaleCreateManyWarehouseInputEnvelopeObjectSchema as SaleCreateManyWarehouseInputEnvelopeObjectSchema } from './SaleCreateManyWarehouseInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema as SaleUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutWarehouseInput.schema';
import { SaleUpdateManyWithWhereWithoutWarehouseInputObjectSchema as SaleUpdateManyWithWhereWithoutWarehouseInputObjectSchema } from './SaleUpdateManyWithWhereWithoutWarehouseInput.schema';
import { SaleScalarWhereInputObjectSchema as SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => SaleUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => SaleCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleUpdateManyWithWhereWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUpdateManyWithWhereWithoutWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleScalarWhereInputObjectSchema), z.lazy(() => SaleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutWarehouseNestedInput>;
export const SaleUncheckedUpdateManyWithoutWarehouseNestedInputObjectZodSchema = makeSchema();
