import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferUpdateWithoutItemsInputObjectSchema as InventoryTransferUpdateWithoutItemsInputObjectSchema } from './InventoryTransferUpdateWithoutItemsInput.schema';
import { InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema as InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutItemsInput.schema';
import { InventoryTransferCreateWithoutItemsInputObjectSchema as InventoryTransferCreateWithoutItemsInputObjectSchema } from './InventoryTransferCreateWithoutItemsInput.schema';
import { InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema as InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutItemsInput.schema';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './InventoryTransferWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => InventoryTransferUpdateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional()
}).strict();
export const InventoryTransferUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpsertWithoutItemsInput>;
export const InventoryTransferUpsertWithoutItemsInputObjectZodSchema = makeSchema();
