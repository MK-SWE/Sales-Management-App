import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutVariantInput.schema';
import { WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateOrConnectWithoutVariantInput.schema';
import { WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema as WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema } from './WarehouseVariantSettingCreateManyVariantInputEnvelope.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseVariantSettingCreateManyVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInput>;
export const WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInputObjectZodSchema = makeSchema();
