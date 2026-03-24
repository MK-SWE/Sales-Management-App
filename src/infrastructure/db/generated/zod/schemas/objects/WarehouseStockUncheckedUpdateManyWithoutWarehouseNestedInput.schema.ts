import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateWithoutWarehouseInputObjectSchema as WarehouseStockCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateWithoutWarehouseInput.schema';
import { WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutWarehouseInput.schema';
import { WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema as WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateOrConnectWithoutWarehouseInput.schema';
import { WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema as WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema } from './WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInput.schema';
import { WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema as WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema } from './WarehouseStockCreateManyWarehouseInputEnvelope.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema as WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema } from './WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInput.schema';
import { WarehouseStockUpdateManyWithWhereWithoutWarehouseInputObjectSchema as WarehouseStockUpdateManyWithWhereWithoutWarehouseInputObjectSchema } from './WarehouseStockUpdateManyWithWhereWithoutWarehouseInput.schema';
import { WarehouseStockScalarWhereInputObjectSchema as WarehouseStockScalarWhereInputObjectSchema } from './WarehouseStockScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WarehouseStockUpdateManyWithWhereWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUpdateManyWithWhereWithoutWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WarehouseStockScalarWhereInputObjectSchema), z.lazy(() => WarehouseStockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema: z.ZodType<Prisma.WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInput>;
export const WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInputObjectZodSchema = makeSchema();
