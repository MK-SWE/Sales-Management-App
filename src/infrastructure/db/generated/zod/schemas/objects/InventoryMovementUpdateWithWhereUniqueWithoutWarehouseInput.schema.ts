import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithoutWarehouseInputObjectSchema as InventoryMovementUpdateWithoutWarehouseInputObjectSchema } from './InventoryMovementUpdateWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedUpdateWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedUpdateWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedUpdateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryMovementUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateWithoutWarehouseInputObjectSchema)])
}).strict();
export const InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInput>;
export const InventoryMovementUpdateWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
