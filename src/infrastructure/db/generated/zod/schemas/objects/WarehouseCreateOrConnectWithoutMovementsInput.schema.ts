import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutMovementsInputObjectSchema as WarehouseCreateWithoutMovementsInputObjectSchema } from './WarehouseCreateWithoutMovementsInput.schema';
import { WarehouseUncheckedCreateWithoutMovementsInputObjectSchema as WarehouseUncheckedCreateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedCreateWithoutMovementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutMovementsInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutMovementsInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutMovementsInput>;
export const WarehouseCreateOrConnectWithoutMovementsInputObjectZodSchema = makeSchema();
