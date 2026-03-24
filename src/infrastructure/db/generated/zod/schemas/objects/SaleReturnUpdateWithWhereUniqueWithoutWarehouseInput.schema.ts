import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutWarehouseInputObjectSchema as SaleReturnUpdateWithoutWarehouseInputObjectSchema } from './SaleReturnUpdateWithoutWarehouseInput.schema';
import { SaleReturnUncheckedUpdateWithoutWarehouseInputObjectSchema as SaleReturnUncheckedUpdateWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleReturnUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutWarehouseInput>;
export const SaleReturnUpdateWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
