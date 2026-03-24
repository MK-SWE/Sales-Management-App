import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemCreateWithoutVariantInputObjectSchema as InventoryTransferItemCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutVariantInput.schema';
import { InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema as InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateOrConnectWithoutVariantInput.schema';
import { InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema as InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from './InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInput.schema';
import { InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema as InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema } from './InventoryTransferItemCreateManyVariantInputEnvelope.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema';
import { InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema as InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from './InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInput.schema';
import { InventoryTransferItemUpdateManyWithWhereWithoutVariantInputObjectSchema as InventoryTransferItemUpdateManyWithWhereWithoutVariantInputObjectSchema } from './InventoryTransferItemUpdateManyWithWhereWithoutVariantInput.schema';
import { InventoryTransferItemScalarWhereInputObjectSchema as InventoryTransferItemScalarWhereInputObjectSchema } from './InventoryTransferItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryTransferItemUpdateManyWithWhereWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUpdateManyWithWhereWithoutVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemUncheckedUpdateManyWithoutVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemUncheckedUpdateManyWithoutVariantNestedInput>;
export const InventoryTransferItemUncheckedUpdateManyWithoutVariantNestedInputObjectZodSchema = makeSchema();
