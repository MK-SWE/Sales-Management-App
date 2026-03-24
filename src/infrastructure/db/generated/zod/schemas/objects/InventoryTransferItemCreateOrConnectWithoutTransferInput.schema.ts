import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemCreateWithoutTransferInputObjectSchema as InventoryTransferItemCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateWithoutTransferInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutTransferInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema)])
}).strict();
export const InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateOrConnectWithoutTransferInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateOrConnectWithoutTransferInput>;
export const InventoryTransferItemCreateOrConnectWithoutTransferInputObjectZodSchema = makeSchema();
