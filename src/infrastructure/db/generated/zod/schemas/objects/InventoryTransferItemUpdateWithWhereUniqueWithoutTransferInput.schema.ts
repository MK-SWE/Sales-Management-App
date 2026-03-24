import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemUpdateWithoutTransferInputObjectSchema as InventoryTransferItemUpdateWithoutTransferInputObjectSchema } from './InventoryTransferItemUpdateWithoutTransferInput.schema';
import { InventoryTransferItemUncheckedUpdateWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedUpdateWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedUpdateWithoutTransferInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferItemUpdateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedUpdateWithoutTransferInputObjectSchema)])
}).strict();
export const InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInput>;
export const InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInputObjectZodSchema = makeSchema();
