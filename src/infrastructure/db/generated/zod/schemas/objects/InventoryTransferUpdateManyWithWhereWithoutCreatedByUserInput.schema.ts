import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferScalarWhereInputObjectSchema as InventoryTransferScalarWhereInputObjectSchema } from './InventoryTransferScalarWhereInput.schema';
import { InventoryTransferUpdateManyMutationInputObjectSchema as InventoryTransferUpdateManyMutationInputObjectSchema } from './InventoryTransferUpdateManyMutationInput.schema';
import { InventoryTransferUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferUpdateManyMutationInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInput>;
export const InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
