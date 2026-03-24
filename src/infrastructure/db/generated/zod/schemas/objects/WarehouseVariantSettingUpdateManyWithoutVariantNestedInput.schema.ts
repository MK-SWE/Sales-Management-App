import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutVariantInput.schema';
import { WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateOrConnectWithoutVariantInput.schema';
import { WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInputObjectSchema as WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInput.schema';
import { WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema as WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema } from './WarehouseVariantSettingCreateManyVariantInputEnvelope.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInputObjectSchema as WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInput.schema';
import { WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInputObjectSchema as WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInput.schema';
import { WarehouseVariantSettingScalarWhereInputObjectSchema as WarehouseVariantSettingScalarWhereInputObjectSchema } from './WarehouseVariantSettingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUpsertWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUpdateWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUpdateManyWithWhereWithoutVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema), z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseVariantSettingUpdateManyWithoutVariantNestedInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUpdateManyWithoutVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUpdateManyWithoutVariantNestedInput>;
export const WarehouseVariantSettingUpdateManyWithoutVariantNestedInputObjectZodSchema = makeSchema();
