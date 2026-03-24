import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutTransfersOutInputObjectSchema as WarehouseCreateWithoutTransfersOutInputObjectSchema } from './WarehouseCreateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersOutInput.schema';
import { WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema as WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema } from './WarehouseCreateOrConnectWithoutTransfersOutInput.schema';
import { WarehouseUpsertWithoutTransfersOutInputObjectSchema as WarehouseUpsertWithoutTransfersOutInputObjectSchema } from './WarehouseUpsertWithoutTransfersOutInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutTransfersOutInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutTransfersOutInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutTransfersOutInput.schema';
import { WarehouseUpdateWithoutTransfersOutInputObjectSchema as WarehouseUpdateWithoutTransfersOutInputObjectSchema } from './WarehouseUpdateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedUpdateWithoutTransfersOutInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutTransfersOutInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutTransfersOutInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutTransfersOutNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutTransfersOutNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutTransfersOutNestedInput>;
export const WarehouseUpdateOneRequiredWithoutTransfersOutNestedInputObjectZodSchema = makeSchema();
