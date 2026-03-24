import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferScalarWhereInputObjectSchema as InventoryTransferScalarWhereInputObjectSchema } from './InventoryTransferScalarWhereInput.schema';
import { InventoryTransferUpdateManyMutationInputObjectSchema as InventoryTransferUpdateManyMutationInputObjectSchema } from './InventoryTransferUpdateManyMutationInput.schema';
import { InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInput>;
export const InventoryTransferUpdateManyWithWhereWithoutSourceWarehouseInputObjectZodSchema = makeSchema();
