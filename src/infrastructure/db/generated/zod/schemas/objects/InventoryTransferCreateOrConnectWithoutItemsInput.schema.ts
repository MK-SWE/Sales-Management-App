import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferCreateWithoutItemsInputObjectSchema as InventoryTransferCreateWithoutItemsInputObjectSchema } from './InventoryTransferCreateWithoutItemsInput.schema';
import { InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema as InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutItemsInput>;
export const InventoryTransferCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
