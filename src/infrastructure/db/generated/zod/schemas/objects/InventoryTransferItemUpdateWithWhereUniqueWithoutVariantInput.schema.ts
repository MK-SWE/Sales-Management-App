import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemUpdateWithoutVariantInputObjectSchema as InventoryTransferItemUpdateWithoutVariantInputObjectSchema } from './InventoryTransferItemUpdateWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedUpdateWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedUpdateWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedUpdateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferItemUpdateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedUpdateWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInput>;
export const InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
