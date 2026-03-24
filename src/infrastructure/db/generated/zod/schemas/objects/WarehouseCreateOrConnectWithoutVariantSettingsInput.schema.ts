import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutVariantSettingsInputObjectSchema as WarehouseCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedCreateWithoutVariantSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutVariantSettingsInput>;
export const WarehouseCreateOrConnectWithoutVariantSettingsInputObjectZodSchema = makeSchema();
