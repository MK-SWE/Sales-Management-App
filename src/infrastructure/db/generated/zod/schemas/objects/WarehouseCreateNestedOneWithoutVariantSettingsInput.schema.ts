import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutVariantSettingsInputObjectSchema as WarehouseCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedCreateWithoutVariantSettingsInput.schema';
import { WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema as WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateOrConnectWithoutVariantSettingsInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutVariantSettingsInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutVariantSettingsInput>;
export const WarehouseCreateNestedOneWithoutVariantSettingsInputObjectZodSchema = makeSchema();
