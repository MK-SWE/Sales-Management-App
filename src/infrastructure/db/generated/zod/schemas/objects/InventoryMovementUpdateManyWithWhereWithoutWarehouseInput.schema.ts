import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementScalarWhereInputObjectSchema as InventoryMovementScalarWhereInputObjectSchema } from './InventoryMovementScalarWhereInput.schema';
import { InventoryMovementUpdateManyMutationInputObjectSchema as InventoryMovementUpdateManyMutationInputObjectSchema } from './InventoryMovementUpdateManyMutationInput.schema';
import { InventoryMovementUncheckedUpdateManyWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedUpdateManyWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedUpdateManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryMovementUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateManyWithoutWarehouseInputObjectSchema)])
}).strict();
export const InventoryMovementUpdateManyWithWhereWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateManyWithWhereWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateManyWithWhereWithoutWarehouseInput>;
export const InventoryMovementUpdateManyWithWhereWithoutWarehouseInputObjectZodSchema = makeSchema();
