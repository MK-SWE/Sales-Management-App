import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutSaleReturnsInputObjectSchema as WarehouseCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedCreateWithoutSaleReturnsInput.schema';
import { WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema as WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateOrConnectWithoutSaleReturnsInput.schema';
import { WarehouseUpsertWithoutSaleReturnsInputObjectSchema as WarehouseUpsertWithoutSaleReturnsInputObjectSchema } from './WarehouseUpsertWithoutSaleReturnsInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutSaleReturnsInput.schema';
import { WarehouseUpdateWithoutSaleReturnsInputObjectSchema as WarehouseUpdateWithoutSaleReturnsInputObjectSchema } from './WarehouseUpdateWithoutSaleReturnsInput.schema';
import { WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema as WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './WarehouseUncheckedUpdateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSaleReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutSaleReturnsInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutSaleReturnsInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInput>;
export const WarehouseUpdateOneRequiredWithoutSaleReturnsNestedInputObjectZodSchema = makeSchema();
