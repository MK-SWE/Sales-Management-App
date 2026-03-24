import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutTransfersOutInputObjectSchema as WarehouseCreateWithoutTransfersOutInputObjectSchema } from './WarehouseCreateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersOutInput.schema';
import { WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema as WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema } from './WarehouseCreateOrConnectWithoutTransfersOutInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutTransfersOutInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutTransfersOutInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutTransfersOutInput>;
export const WarehouseCreateNestedOneWithoutTransfersOutInputObjectZodSchema = makeSchema();
