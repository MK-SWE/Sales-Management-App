import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateWithoutVariantInputObjectSchema as InventoryMovementCreateWithoutVariantInputObjectSchema } from './InventoryMovementCreateWithoutVariantInput.schema';
import { InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema as InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutVariantInput.schema';
import { InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema as InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema } from './InventoryMovementCreateOrConnectWithoutVariantInput.schema';
import { InventoryMovementUpsertWithWhereUniqueWithoutVariantInputObjectSchema as InventoryMovementUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from './InventoryMovementUpsertWithWhereUniqueWithoutVariantInput.schema';
import { InventoryMovementCreateManyVariantInputEnvelopeObjectSchema as InventoryMovementCreateManyVariantInputEnvelopeObjectSchema } from './InventoryMovementCreateManyVariantInputEnvelope.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithWhereUniqueWithoutVariantInputObjectSchema as InventoryMovementUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from './InventoryMovementUpdateWithWhereUniqueWithoutVariantInput.schema';
import { InventoryMovementUpdateManyWithWhereWithoutVariantInputObjectSchema as InventoryMovementUpdateManyWithWhereWithoutVariantInputObjectSchema } from './InventoryMovementUpdateManyWithWhereWithoutVariantInput.schema';
import { InventoryMovementScalarWhereInputObjectSchema as InventoryMovementScalarWhereInputObjectSchema } from './InventoryMovementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryMovementUpsertWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUpsertWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryMovementCreateManyVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryMovementUpdateWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUpdateWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryMovementUpdateManyWithWhereWithoutVariantInputObjectSchema), z.lazy(() => InventoryMovementUpdateManyWithWhereWithoutVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryMovementScalarWhereInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryMovementUncheckedUpdateManyWithoutVariantNestedInputObjectSchema: z.ZodType<Prisma.InventoryMovementUncheckedUpdateManyWithoutVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUncheckedUpdateManyWithoutVariantNestedInput>;
export const InventoryMovementUncheckedUpdateManyWithoutVariantNestedInputObjectZodSchema = makeSchema();
