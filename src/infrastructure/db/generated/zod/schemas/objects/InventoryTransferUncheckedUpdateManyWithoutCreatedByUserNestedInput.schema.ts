import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutCreatedByUserInput.schema';
import { InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutCreatedByUserInput.schema';
import { InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema as InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema } from './InventoryTransferCreateManyCreatedByUserInputEnvelope.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { InventoryTransferScalarWhereInputObjectSchema as InventoryTransferScalarWhereInputObjectSchema } from './InventoryTransferScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InventoryTransferScalarWhereInputObjectSchema), z.lazy(() => InventoryTransferScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInput>;
export const InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
