import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutItemsInputObjectSchema as InventoryTransferCreateWithoutItemsInputObjectSchema } from './InventoryTransferCreateWithoutItemsInput.schema';
import { InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema as InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutItemsInput.schema';
import { InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema as InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutItemsInput.schema';
import { InventoryTransferUpsertWithoutItemsInputObjectSchema as InventoryTransferUpsertWithoutItemsInputObjectSchema } from './InventoryTransferUpsertWithoutItemsInput.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateToOneWithWhereWithoutItemsInputObjectSchema as InventoryTransferUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './InventoryTransferUpdateToOneWithWhereWithoutItemsInput.schema';
import { InventoryTransferUpdateWithoutItemsInputObjectSchema as InventoryTransferUpdateWithoutItemsInputObjectSchema } from './InventoryTransferUpdateWithoutItemsInput.schema';
import { InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema as InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InventoryTransferCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => InventoryTransferUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => InventoryTransferUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUpdateWithoutItemsInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const InventoryTransferUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateOneRequiredWithoutItemsNestedInput>;
export const InventoryTransferUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
