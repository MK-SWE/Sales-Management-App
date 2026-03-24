import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemScalarWhereInputObjectSchema as InventoryTransferItemScalarWhereInputObjectSchema } from './InventoryTransferItemScalarWhereInput.schema';
import { InventoryTransferItemUpdateManyMutationInputObjectSchema as InventoryTransferItemUpdateManyMutationInputObjectSchema } from './InventoryTransferItemUpdateManyMutationInput.schema';
import { InventoryTransferItemUncheckedUpdateManyWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedUpdateManyWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedUpdateManyWithoutTransferInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferItemUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedUpdateManyWithoutTransferInputObjectSchema)])
}).strict();
export const InventoryTransferItemUpdateManyWithWhereWithoutTransferInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpdateManyWithWhereWithoutTransferInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateManyWithWhereWithoutTransferInput>;
export const InventoryTransferItemUpdateManyWithWhereWithoutTransferInputObjectZodSchema = makeSchema();
