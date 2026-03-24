import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutTransfersInInputObjectSchema as WarehouseCreateWithoutTransfersInInputObjectSchema } from './WarehouseCreateWithoutTransfersInInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutTransfersInInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutTransfersInInput>;
export const WarehouseCreateOrConnectWithoutTransfersInInputObjectZodSchema = makeSchema();
