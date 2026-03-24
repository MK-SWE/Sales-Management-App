import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithoutCreatedByUserInputObjectSchema as InventoryMovementUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUpdateWithoutCreatedByUserInput.schema';
import { InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedUpdateWithoutCreatedByUserInput.schema';
import { InventoryMovementCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementCreateWithoutCreatedByUserInput.schema';
import { InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryMovementUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
