import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementCreateWithoutWarehouseInputObjectSchema as InventoryMovementCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const InventoryMovementCreateOrConnectWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateOrConnectWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateOrConnectWithoutWarehouseInput>;
export const InventoryMovementCreateOrConnectWithoutWarehouseInputObjectZodSchema = makeSchema();
