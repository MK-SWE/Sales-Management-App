import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutCreatedByUserInput>;
export const InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
