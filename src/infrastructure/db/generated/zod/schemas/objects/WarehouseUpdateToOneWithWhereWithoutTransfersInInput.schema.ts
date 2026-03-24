import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutTransfersInInputObjectSchema as WarehouseUpdateWithoutTransfersInInputObjectSchema } from './WarehouseUpdateWithoutTransfersInInput.schema';
import { WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema as WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedUpdateWithoutTransfersInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutTransfersInInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutTransfersInInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutTransfersInInput>;
export const WarehouseUpdateToOneWithWhereWithoutTransfersInInputObjectZodSchema = makeSchema();
