import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateOrConnectWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema as WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema } from './WarehouseVariantSettingCreateManyWarehouseInputEnvelope.schema';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseVariantSettingCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema), z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateNestedManyWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateNestedManyWithoutWarehouseInput>;
export const WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectZodSchema = makeSchema();
