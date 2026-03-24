import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseVariantSettingWhereUniqueInputObjectSchema as WarehouseVariantSettingWhereUniqueInputObjectSchema } from './WarehouseVariantSettingWhereUniqueInput.schema';
import { WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseVariantSettingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseVariantSettingCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseVariantSettingUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingCreateOrConnectWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingCreateOrConnectWithoutWarehouseInput>;
export const WarehouseVariantSettingCreateOrConnectWithoutWarehouseInputObjectZodSchema = makeSchema();
