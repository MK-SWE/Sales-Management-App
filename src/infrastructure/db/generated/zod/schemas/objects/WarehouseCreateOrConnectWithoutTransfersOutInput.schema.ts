import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutTransfersOutInputObjectSchema as WarehouseCreateWithoutTransfersOutInputObjectSchema } from './WarehouseCreateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersOutInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutTransfersOutInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutTransfersOutInput>;
export const WarehouseCreateOrConnectWithoutTransfersOutInputObjectZodSchema = makeSchema();
