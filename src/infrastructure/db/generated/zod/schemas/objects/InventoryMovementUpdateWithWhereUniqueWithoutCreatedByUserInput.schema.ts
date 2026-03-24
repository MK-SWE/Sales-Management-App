import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithoutCreatedByUserInputObjectSchema as InventoryMovementUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUpdateWithoutCreatedByUserInput.schema';
import { InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryMovementUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
