import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemCreateWithoutTransferInputObjectSchema as InventoryTransferItemCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateWithoutTransferInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutTransferInput.schema';
import { InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema as InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateOrConnectWithoutTransferInput.schema';
import { InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema as InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema } from './InventoryTransferItemCreateManyTransferInputEnvelope.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemCreateWithoutTransferInputObjectSchema).array(), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInput>;
export const InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInputObjectZodSchema = makeSchema();
