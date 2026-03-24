import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutSourceWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutSourceWarehouseInput.schema';
import { InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutSourceWarehouseInput.schema';
import { InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInputObjectSchema as InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInput.schema';
import { InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema as InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema } from './InventoryTransferCreateManySourceWarehouseInputEnvelope.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInputObjectSchema as InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInput.schema';
import { InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInputObjectSchema as InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInput.schema';
import { InventoryTransferScalarWhereInputObjectSchema as InventoryTransferScalarWhereInputObjectSchema } from './InventoryTransferScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema).array(), z.lazy(() => InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryTransferScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferUpdateManyWithoutSourceWarehouseNestedInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateManyWithoutSourceWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateManyWithoutSourceWarehouseNestedInput>;
export const InventoryTransferUpdateManyWithoutSourceWarehouseNestedInputObjectZodSchema = makeSchema();
