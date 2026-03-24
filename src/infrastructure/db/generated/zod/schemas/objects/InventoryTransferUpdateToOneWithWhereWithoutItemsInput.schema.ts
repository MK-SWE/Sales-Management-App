import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './InventoryTransferWhereInput.schema';
import { InventoryTransferUpdateWithoutItemsInputObjectSchema as InventoryTransferUpdateWithoutItemsInputObjectSchema } from './InventoryTransferUpdateWithoutItemsInput.schema';
import { InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema as InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => InventoryTransferUpdateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateToOneWithWhereWithoutItemsInput>;
export const InventoryTransferUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
