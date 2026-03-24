import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleScalarWhereInputObjectSchema as SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';
import { SaleUpdateManyMutationInputObjectSchema as SaleUpdateManyMutationInputObjectSchema } from './SaleUpdateManyMutationInput.schema';
import { SaleUncheckedUpdateManyWithoutWarehouseInputObjectSchema as SaleUncheckedUpdateManyWithoutWarehouseInputObjectSchema } from './SaleUncheckedUpdateManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleUpdateManyMutationInputObjectSchema), z.lazy(() => SaleUncheckedUpdateManyWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleUpdateManyWithWhereWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutWarehouseInput>;
export const SaleUpdateManyWithWhereWithoutWarehouseInputObjectZodSchema = makeSchema();
