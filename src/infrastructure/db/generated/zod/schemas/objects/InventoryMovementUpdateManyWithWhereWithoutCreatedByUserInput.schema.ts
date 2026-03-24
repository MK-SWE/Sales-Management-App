import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementScalarWhereInputObjectSchema as InventoryMovementScalarWhereInputObjectSchema } from './InventoryMovementScalarWhereInput.schema';
import { InventoryMovementUpdateManyMutationInputObjectSchema as InventoryMovementUpdateManyMutationInputObjectSchema } from './InventoryMovementUpdateManyMutationInput.schema';
import { InventoryMovementUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryMovementUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInput>;
export const InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
