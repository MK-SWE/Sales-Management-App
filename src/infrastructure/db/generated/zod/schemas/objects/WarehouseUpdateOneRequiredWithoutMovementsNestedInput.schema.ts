import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutMovementsInputObjectSchema as WarehouseCreateWithoutMovementsInputObjectSchema } from './WarehouseCreateWithoutMovementsInput.schema';
import { WarehouseUncheckedCreateWithoutMovementsInputObjectSchema as WarehouseUncheckedCreateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedCreateWithoutMovementsInput.schema';
import { WarehouseCreateOrConnectWithoutMovementsInputObjectSchema as WarehouseCreateOrConnectWithoutMovementsInputObjectSchema } from './WarehouseCreateOrConnectWithoutMovementsInput.schema';
import { WarehouseUpsertWithoutMovementsInputObjectSchema as WarehouseUpsertWithoutMovementsInputObjectSchema } from './WarehouseUpsertWithoutMovementsInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutMovementsInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutMovementsInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutMovementsInput.schema';
import { WarehouseUpdateWithoutMovementsInputObjectSchema as WarehouseUpdateWithoutMovementsInputObjectSchema } from './WarehouseUpdateWithoutMovementsInput.schema';
import { WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema as WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutMovementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutMovementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutMovementsInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutMovementsInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutMovementsNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutMovementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutMovementsNestedInput>;
export const WarehouseUpdateOneRequiredWithoutMovementsNestedInputObjectZodSchema = makeSchema();
