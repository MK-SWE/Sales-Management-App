import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutMovementsInputObjectSchema as WarehouseUpdateWithoutMovementsInputObjectSchema } from './WarehouseUpdateWithoutMovementsInput.schema';
import { WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema as WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutMovementsInput.schema';
import { WarehouseCreateWithoutMovementsInputObjectSchema as WarehouseCreateWithoutMovementsInputObjectSchema } from './WarehouseCreateWithoutMovementsInput.schema';
import { WarehouseUncheckedCreateWithoutMovementsInputObjectSchema as WarehouseUncheckedCreateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedCreateWithoutMovementsInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutMovementsInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutMovementsInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutMovementsInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutMovementsInput>;
export const WarehouseUpsertWithoutMovementsInputObjectZodSchema = makeSchema();
