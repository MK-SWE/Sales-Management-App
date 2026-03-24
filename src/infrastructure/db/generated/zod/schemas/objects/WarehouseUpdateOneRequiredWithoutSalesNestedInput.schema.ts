import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutSalesInputObjectSchema as WarehouseCreateWithoutSalesInputObjectSchema } from './WarehouseCreateWithoutSalesInput.schema';
import { WarehouseUncheckedCreateWithoutSalesInputObjectSchema as WarehouseUncheckedCreateWithoutSalesInputObjectSchema } from './WarehouseUncheckedCreateWithoutSalesInput.schema';
import { WarehouseCreateOrConnectWithoutSalesInputObjectSchema as WarehouseCreateOrConnectWithoutSalesInputObjectSchema } from './WarehouseCreateOrConnectWithoutSalesInput.schema';
import { WarehouseUpsertWithoutSalesInputObjectSchema as WarehouseUpsertWithoutSalesInputObjectSchema } from './WarehouseUpsertWithoutSalesInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutSalesInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutSalesInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutSalesInput.schema';
import { WarehouseUpdateWithoutSalesInputObjectSchema as WarehouseUpdateWithoutSalesInputObjectSchema } from './WarehouseUpdateWithoutSalesInput.schema';
import { WarehouseUncheckedUpdateWithoutSalesInputObjectSchema as WarehouseUncheckedUpdateWithoutSalesInputObjectSchema } from './WarehouseUncheckedUpdateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutSalesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutSalesInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutSalesInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutSalesInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutSalesInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutSalesNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutSalesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutSalesNestedInput>;
export const WarehouseUpdateOneRequiredWithoutSalesNestedInputObjectZodSchema = makeSchema();
