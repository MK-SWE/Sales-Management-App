import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemCreateWithoutTransferInputObjectSchema as InventoryTransferItemCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateWithoutTransferInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutTransferInput.schema';
import { InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema as InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateOrConnectWithoutTransferInput.schema';
import { InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInputObjectSchema as InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInputObjectSchema } from './InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInput.schema';
import { InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema as InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema } from './InventoryTransferItemCreateManyTransferInputEnvelope.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInputObjectSchema as InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInputObjectSchema } from './InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInput.schema';
import { InventoryTransferItemUpdateManyWithWhereWithoutTransferInputObjectSchema as InventoryTransferItemUpdateManyWithWhereWithoutTransferInputObjectSchema } from './InventoryTransferItemUpdateManyWithWhereWithoutTransferInput.schema';
import { InventoryTransferItemScalarWhereInputObjectSchema as InventoryTransferItemScalarWhereInputObjectSchema } from './InventoryTransferItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemCreateWithoutTransferInputObjectSchema).array(), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutTransferInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemCreateOrConnectWithoutTransferInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUpsertWithWhereUniqueWithoutTransferInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferItemCreateManyTransferInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUpdateWithWhereUniqueWithoutTransferInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryTransferItemUpdateManyWithWhereWithoutTransferInputObjectSchema), z.lazy(() => InventoryTransferItemUpdateManyWithWhereWithoutTransferInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferItemUpdateManyWithoutTransferNestedInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUpdateManyWithoutTransferNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUpdateManyWithoutTransferNestedInput>;
export const InventoryTransferItemUpdateManyWithoutTransferNestedInputObjectZodSchema = makeSchema();
