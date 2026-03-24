import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithoutWarehouseInputObjectSchema as InventoryMovementUpdateWithoutWarehouseInputObjectSchema } from './InventoryMovementUpdateWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedUpdateWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedUpdateWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedUpdateWithoutWarehouseInput.schema';
import { InventoryMovementCreateWithoutWarehouseInputObjectSchema as InventoryMovementCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryMovementUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateWithoutWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInput>;
export const InventoryMovementUpsertWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
