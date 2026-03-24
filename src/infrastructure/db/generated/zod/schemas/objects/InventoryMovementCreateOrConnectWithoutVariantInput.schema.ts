import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementCreateWithoutVariantInputObjectSchema as InventoryMovementCreateWithoutVariantInputObjectSchema } from './InventoryMovementCreateWithoutVariantInput.schema';
import { InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema as InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateOrConnectWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateOrConnectWithoutVariantInput>;
export const InventoryMovementCreateOrConnectWithoutVariantInputObjectZodSchema = makeSchema();
