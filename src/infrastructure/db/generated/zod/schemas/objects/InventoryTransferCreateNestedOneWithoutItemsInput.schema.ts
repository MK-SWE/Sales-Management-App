import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutItemsInputObjectSchema as InventoryTransferCreateWithoutItemsInputObjectSchema } from './InventoryTransferCreateWithoutItemsInput.schema';
import { InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema as InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutItemsInput.schema';
import { InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema as InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutItemsInput.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).optional()
}).strict();
export const InventoryTransferCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateNestedOneWithoutItemsInput>;
export const InventoryTransferCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
