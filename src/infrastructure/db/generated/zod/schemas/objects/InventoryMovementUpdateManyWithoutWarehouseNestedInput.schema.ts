import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateWithoutWarehouseInputObjectSchema as InventoryMovementCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutWarehouseInput.schema';
import { InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema as InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateOrConnectWithoutWarehouseInput.schema';
import { InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema as InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema } from './InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInput.schema';
import { InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema as InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema } from './InventoryMovementCreateManyWarehouseInputEnvelope.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema as InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema } from './InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInput.schema';
import { InventoryMovementUpdateManyWithWhereWithoutWarehouseInputObjectSchema as InventoryMovementUpdateManyWithWhereWithoutWarehouseInputObjectSchema } from './InventoryMovementUpdateManyWithWhereWithoutWarehouseInput.schema';
import { InventoryMovementScalarWhereInputObjectSchema as InventoryMovementScalarWhereInputObjectSchema } from './InventoryMovementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryMovementUpdateManyWithWhereWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUpdateManyWithWhereWithoutWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryMovementScalarWhereInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryMovementUpdateManyWithoutWarehouseNestedInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateManyWithoutWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateManyWithoutWarehouseNestedInput>;
export const InventoryMovementUpdateManyWithoutWarehouseNestedInputObjectZodSchema = makeSchema();
