import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutMovementsInputObjectSchema as WarehouseCreateWithoutMovementsInputObjectSchema } from './WarehouseCreateWithoutMovementsInput.schema';
import { WarehouseUncheckedCreateWithoutMovementsInputObjectSchema as WarehouseUncheckedCreateWithoutMovementsInputObjectSchema } from './WarehouseUncheckedCreateWithoutMovementsInput.schema';
import { WarehouseCreateOrConnectWithoutMovementsInputObjectSchema as WarehouseCreateOrConnectWithoutMovementsInputObjectSchema } from './WarehouseCreateOrConnectWithoutMovementsInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutMovementsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutMovementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutMovementsInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutMovementsInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutMovementsInput>;
export const WarehouseCreateNestedOneWithoutMovementsInputObjectZodSchema = makeSchema();
