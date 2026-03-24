import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutVariantSettingsInputObjectSchema as WarehouseCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedCreateWithoutVariantSettingsInput.schema';
import { WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema as WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema } from './WarehouseCreateOrConnectWithoutVariantSettingsInput.schema';
import { WarehouseUpsertWithoutVariantSettingsInputObjectSchema as WarehouseUpsertWithoutVariantSettingsInputObjectSchema } from './WarehouseUpsertWithoutVariantSettingsInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutVariantSettingsInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutVariantSettingsInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutVariantSettingsInput.schema';
import { WarehouseUpdateWithoutVariantSettingsInputObjectSchema as WarehouseUpdateWithoutVariantSettingsInputObjectSchema } from './WarehouseUpdateWithoutVariantSettingsInput.schema';
import { WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema as WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutVariantSettingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutVariantSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutVariantSettingsInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutVariantSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutVariantSettingsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutVariantSettingsInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutVariantSettingsNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutVariantSettingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutVariantSettingsNestedInput>;
export const WarehouseUpdateOneRequiredWithoutVariantSettingsNestedInputObjectZodSchema = makeSchema();
