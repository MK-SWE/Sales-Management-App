import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemUpdateWithoutTransferInputObjectSchema as InventoryTransferItemUpdateWithoutTransferInputObjectSchema } from './InventoryTransferItemUpdateWithoutTransferInput.schema';
import { InventoryTransferItemUncheckedUpdateWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedUpdateWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedUpdateWithoutTransferInput.schema';
import { InventoryTransferItemCreateWithoutTransferInputObjectSchema as InventoryTransferItemCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateWithoutTransferInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutTransferInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryTransferItemUpdateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedUpdateWithoutTransferInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema)])
}).strict();
export const InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInput>;
export const InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInputObjectZodSchema = makeSchema();
