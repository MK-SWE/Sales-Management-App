import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferScalarWhereInputObjectSchema as InventoryTransferScalarWhereInputObjectSchema } from './InventoryTransferScalarWhereInput.schema';
import { InventoryTransferUpdateManyMutationInputObjectSchema as InventoryTransferUpdateManyMutationInputObjectSchema } from './InventoryTransferUpdateManyMutationInput.schema';
import { InventoryTransferUncheckedUpdateManyWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedUpdateManyWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedUpdateManyWithoutDestWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateManyWithoutDestWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInput>;
export const InventoryTransferUpdateManyWithWhereWithoutDestWarehouseInputObjectZodSchema = makeSchema();
