import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementScalarWhereInputObjectSchema as InventoryMovementScalarWhereInputObjectSchema } from './InventoryMovementScalarWhereInput.schema';
import { InventoryMovementUpdateManyMutationInputObjectSchema as InventoryMovementUpdateManyMutationInputObjectSchema } from './InventoryMovementUpdateManyMutationInput.schema';
import { InventoryMovementUncheckedUpdateManyWithoutVariantInputObjectSchema as InventoryMovementUncheckedUpdateManyWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedUpdateManyWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryMovementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryMovementUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryMovementUncheckedUpdateManyWithoutVariantInputObjectSchema)])
}).strict();
export const InventoryMovementUpdateManyWithWhereWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryMovementUpdateManyWithWhereWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUpdateManyWithWhereWithoutVariantInput>;
export const InventoryMovementUpdateManyWithWhereWithoutVariantInputObjectZodSchema = makeSchema();
