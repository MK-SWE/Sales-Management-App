import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemScalarWhereInputObjectSchema as InventoryTransferItemScalarWhereInputObjectSchema } from './InventoryTransferItemScalarWhereInput.schema';
import { InventoryTransferItemUpdateManyMutationInputObjectSchema as InventoryTransferItemUpdateManyMutationInputObjectSchema } from './InventoryTransferItemUpdateManyMutationInput.schema';
import { InventoryTransferItemUncheckedUpdateManyWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedUpdateManyWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedUpdateManyWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferItemUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedUpdateManyWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryTransferItemUpdateManyWithWhereWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpdateManyWithWhereWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateManyWithWhereWithoutVariantInput>;
export const InventoryTransferItemUpdateManyWithWhereWithoutVariantInputObjectZodSchema = makeSchema();
