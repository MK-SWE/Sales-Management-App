import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithoutVariantInputObjectSchema as InventoryMovementUpdateWithoutVariantInputObjectSchema } from './InventoryMovementUpdateWithoutVariantInput.schema';
import { InventoryMovementUncheckedUpdateWithoutVariantInputObjectSchema as InventoryMovementUncheckedUpdateWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedUpdateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryMovementUpdateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryMovementUpdateWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateWithWhereUniqueWithoutVariantInput>;
export const InventoryMovementUpdateWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
