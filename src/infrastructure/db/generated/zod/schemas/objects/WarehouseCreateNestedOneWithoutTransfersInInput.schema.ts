import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutTransfersInInputObjectSchema as WarehouseCreateWithoutTransfersInInputObjectSchema } from './WarehouseCreateWithoutTransfersInInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersInInput.schema';
import { WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema as WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema } from './WarehouseCreateOrConnectWithoutTransfersInInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutTransfersInInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutTransfersInInput>;
export const WarehouseCreateNestedOneWithoutTransfersInInputObjectZodSchema = makeSchema();
