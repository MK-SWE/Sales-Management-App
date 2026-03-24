import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutTransfersOutInputObjectSchema as WarehouseUpdateWithoutTransfersOutInputObjectSchema } from './WarehouseUpdateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedUpdateWithoutTransfersOutInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutTransfersOutInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutTransfersOutInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutTransfersOutInput>;
export const WarehouseUpdateToOneWithWhereWithoutTransfersOutInputObjectZodSchema = makeSchema();
