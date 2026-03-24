import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateWithoutWarehouseInputObjectSchema as InventoryMovementCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutWarehouseInput.schema';
import { InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema as InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateOrConnectWithoutWarehouseInput.schema';
import { InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema as InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema } from './InventoryMovementCreateManyWarehouseInputEnvelope.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryMovementCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryMovementCreateNestedManyWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateNestedManyWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateNestedManyWithoutWarehouseInput>;
export const InventoryMovementCreateNestedManyWithoutWarehouseInputObjectZodSchema = makeSchema();
