import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementCreateWithoutCreatedByUserInput.schema';
import { InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedCreateWithoutCreatedByUserInput.schema';
import { InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema as InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './InventoryMovementCreateOrConnectWithoutCreatedByUserInput.schema';
import { InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema as InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema } from './InventoryMovementCreateManyCreatedByUserInputEnvelope.schema';
import { InventoryMovementWhereUniqueInputObjectSchema as InventoryMovementWhereUniqueInputObjectSchema } from './InventoryMovementWhereUniqueInput.schema';
import { InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { InventoryMovementScalarWhereInputObjectSchema as InventoryMovementScalarWhereInputObjectSchema } from './InventoryMovementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryMovementCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryMovementCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema), z.lazy(() => InventoryMovementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryMovementUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryMovementScalarWhereInputObjectSchema), z.lazy(() => InventoryMovementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInput>;
export const InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
