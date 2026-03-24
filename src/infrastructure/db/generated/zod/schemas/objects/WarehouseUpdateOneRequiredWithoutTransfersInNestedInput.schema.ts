import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutTransfersInInputObjectSchema as WarehouseCreateWithoutTransfersInInputObjectSchema } from './WarehouseCreateWithoutTransfersInInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersInInput.schema';
import { WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema as WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema } from './WarehouseCreateOrConnectWithoutTransfersInInput.schema';
import { WarehouseUpsertWithoutTransfersInInputObjectSchema as WarehouseUpsertWithoutTransfersInInputObjectSchema } from './WarehouseUpsertWithoutTransfersInInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutTransfersInInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutTransfersInInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutTransfersInInput.schema';
import { WarehouseUpdateWithoutTransfersInInputObjectSchema as WarehouseUpdateWithoutTransfersInInputObjectSchema } from './WarehouseUpdateWithoutTransfersInInput.schema';
import { WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema as WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedUpdateWithoutTransfersInInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutTransfersInInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutTransfersInInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutTransfersInNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutTransfersInNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutTransfersInNestedInput>;
export const WarehouseUpdateOneRequiredWithoutTransfersInNestedInputObjectZodSchema = makeSchema();
