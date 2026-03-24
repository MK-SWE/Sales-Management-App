import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockScalarWhereInputObjectSchema as WarehouseStockScalarWhereInputObjectSchema } from './WarehouseStockScalarWhereInput.schema';
import { WarehouseStockUpdateManyMutationInputObjectSchema as WarehouseStockUpdateManyMutationInputObjectSchema } from './WarehouseStockUpdateManyMutationInput.schema';
import { WarehouseStockUncheckedUpdateManyWithoutVariantInputObjectSchema as WarehouseStockUncheckedUpdateManyWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedUpdateManyWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseStockUpdateManyMutationInputObjectSchema), z.lazy(() => WarehouseStockUncheckedUpdateManyWithoutVariantInputObjectSchema)])
}).strict();
export const WarehouseStockUpdateManyWithWhereWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpdateManyWithWhereWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpdateManyWithWhereWithoutVariantInput>;
export const WarehouseStockUpdateManyWithWhereWithoutVariantInputObjectZodSchema = makeSchema();
