import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithoutCreatedByUserInputObjectSchema as InventoryTransferUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUpdateWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedUpdateWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutCreatedByUserInput.schema';
import { InventoryTransferCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryTransferUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
