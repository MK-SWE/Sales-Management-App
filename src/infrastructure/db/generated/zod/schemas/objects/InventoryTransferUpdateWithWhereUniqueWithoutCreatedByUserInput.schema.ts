import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithoutCreatedByUserInputObjectSchema as InventoryTransferUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUpdateWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedUpdateWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
