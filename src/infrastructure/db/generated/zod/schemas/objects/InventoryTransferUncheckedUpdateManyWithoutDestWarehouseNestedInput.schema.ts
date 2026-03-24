import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutDestWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutDestWarehouseInput.schema';
import { InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutDestWarehouseInput.schema';
import { InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInputObjectSchema as InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInput.schema';
import { InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema as InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema } from './InventoryTransferCreateManyDestWarehouseInputEnvelope.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInputObjectSchema as InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInput.schema';
import { InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInputObjectSchema as InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInput.schema';
import { InventoryTransferScalarWhereInputObjectSchema as InventoryTransferScalarWhereInputObjectSchema } from './InventoryTransferScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateWithoutDestWarehouseInputObjectSchema).array(), z.lazy(() => InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryTransferScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInputObjectSchema: z.ZodType<Prisma.InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInput>;
export const InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInputObjectZodSchema = makeSchema();
