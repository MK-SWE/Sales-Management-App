import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutSourceWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutSourceWarehouseInput.schema';
import { InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutSourceWarehouseInput.schema';
import { InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema as InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema } from './InventoryTransferCreateManySourceWarehouseInputEnvelope.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema).array(), z.lazy(() => InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferCreateManySourceWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferCreateNestedManyWithoutSourceWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateNestedManyWithoutSourceWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateNestedManyWithoutSourceWarehouseInput>;
export const InventoryTransferCreateNestedManyWithoutSourceWarehouseInputObjectZodSchema = makeSchema();
