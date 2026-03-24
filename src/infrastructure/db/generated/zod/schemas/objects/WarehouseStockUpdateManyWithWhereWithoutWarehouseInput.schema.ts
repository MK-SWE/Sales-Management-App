import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockScalarWhereInputObjectSchema as WarehouseStockScalarWhereInputObjectSchema } from './WarehouseStockScalarWhereInput.schema';
import { WarehouseStockUpdateManyMutationInputObjectSchema as WarehouseStockUpdateManyMutationInputObjectSchema } from './WarehouseStockUpdateManyMutationInput.schema';
import { WarehouseStockUncheckedUpdateManyWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedUpdateManyWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedUpdateManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseStockUpdateManyMutationInputObjectSchema), z.lazy(() => WarehouseStockUncheckedUpdateManyWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseStockUpdateManyWithWhereWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpdateManyWithWhereWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpdateManyWithWhereWithoutWarehouseInput>;
export const WarehouseStockUpdateManyWithWhereWithoutWarehouseInputObjectZodSchema = makeSchema();
