import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemUpdateWithoutVariantInputObjectSchema as InventoryTransferItemUpdateWithoutVariantInputObjectSchema } from './InventoryTransferItemUpdateWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedUpdateWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedUpdateWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedUpdateWithoutVariantInput.schema';
import { InventoryTransferItemCreateWithoutVariantInputObjectSchema as InventoryTransferItemCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryTransferItemUpdateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedUpdateWithoutVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInput>;
export const InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
