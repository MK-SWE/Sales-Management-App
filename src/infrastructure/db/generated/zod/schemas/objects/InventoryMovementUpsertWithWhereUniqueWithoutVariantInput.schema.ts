import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithoutVariantInputObjectSchema as InventoryMovementUpdateWithoutVariantInputObjectSchema } from './InventoryMovementUpdateWithoutVariantInput.schema';
import { InventoryMovementUncheckedUpdateWithoutVariantInputObjectSchema as InventoryMovementUncheckedUpdateWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedUpdateWithoutVariantInput.schema';
import { InventoryMovementCreateWithoutVariantInputObjectSchema as InventoryMovementCreateWithoutVariantInputObjectSchema } from './InventoryMovementCreateWithoutVariantInput.schema';
import { InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema as InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryMovementUpdateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateWithoutVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryMovementUpsertWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpsertWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpsertWithWhereUniqueWithoutVariantInput>;
export const InventoryMovementUpsertWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
