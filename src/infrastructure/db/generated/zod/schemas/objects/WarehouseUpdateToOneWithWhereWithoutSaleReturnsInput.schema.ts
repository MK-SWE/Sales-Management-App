import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutSaleReturnsInputObjectSchema as WarehouseUpdateWithoutSaleReturnsInputObjectSchema } from './WarehouseUpdateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutSaleReturnsInput>;
export const WarehouseUpdateToOneWithWhereWithoutSaleReturnsInputObjectZodSchema = makeSchema();
