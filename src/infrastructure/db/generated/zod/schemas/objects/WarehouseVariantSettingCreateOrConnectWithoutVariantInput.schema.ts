import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateOrConnectWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateOrConnectWithoutVariantInput>;
export const WarehouseVariantSettingCreateOrConnectWithoutVariantInputObjectZodSchema = makeSchema();
