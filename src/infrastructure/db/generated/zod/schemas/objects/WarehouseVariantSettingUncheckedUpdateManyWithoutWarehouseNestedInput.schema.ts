import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateOrConnectWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema as WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema } from './WarehouseVariantSettingCreateManyWarehouseInputEnvelope.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInput.schema';
import { WarehouseVariantSettingScalarWhereInputObjectSchema as WarehouseVariantSettingScalarWhereInputObjectSchema } from './WarehouseVariantSettingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUpdateManyWithWhereWithoutWarehouseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema), z.lazy(() => WarehouseVariantSettingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInput>;
export const WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInputObjectZodSchema = makeSchema();
