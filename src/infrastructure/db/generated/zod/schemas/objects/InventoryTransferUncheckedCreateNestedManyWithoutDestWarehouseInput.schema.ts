import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutDestWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutDestWarehouseInput.schema';
import { InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutDestWarehouseInput.schema';
import { InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema as InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema } from './InventoryTransferCreateManyDestWarehouseInputEnvelope.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateWithoutDestWarehouseInputObjectSchema).array(), z.lazy(() => InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferCreateManyDestWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInput>;
export const InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInputObjectZodSchema = makeSchema();
