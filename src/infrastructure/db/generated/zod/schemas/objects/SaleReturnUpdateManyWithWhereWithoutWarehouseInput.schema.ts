import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema';
import { SaleReturnUpdateManyMutationInputObjectSchema as SaleReturnUpdateManyMutationInputObjectSchema } from './SaleReturnUpdateManyMutationInput.schema';
import { SaleReturnUncheckedUpdateManyWithoutWarehouseInputObjectSchema as SaleReturnUncheckedUpdateManyWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedUpdateManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateManyMutationInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateManyWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleReturnUpdateManyWithWhereWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutWarehouseInput>;
export const SaleReturnUpdateManyWithWhereWithoutWarehouseInputObjectZodSchema = makeSchema();
