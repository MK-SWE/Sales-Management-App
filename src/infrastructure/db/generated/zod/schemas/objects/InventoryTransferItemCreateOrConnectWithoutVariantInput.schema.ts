import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemCreateWithoutVariantInputObjectSchema as InventoryTransferItemCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateOrConnectWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateOrConnectWithoutVariantInput>;
export const InventoryTransferItemCreateOrConnectWithoutVariantInputObjectZodSchema = makeSchema();
