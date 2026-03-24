import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementCreateWithoutCreatedByUserInput.schema';
import { InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementCreateOrConnectWithoutCreatedByUserInput>;
export const InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
