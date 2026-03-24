import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutWarehouseInputObjectSchema as SaleReturnUpdateWithoutWarehouseInputObjectSchema } from './SaleReturnUpdateWithoutWarehouseInput.schema';
import { SaleReturnUncheckedUpdateWithoutWarehouseInputObjectSchema as SaleReturnUncheckedUpdateWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutWarehouseInput.schema';
import { SaleReturnCreateWithoutWarehouseInputObjectSchema as SaleReturnCreateWithoutWarehouseInputObjectSchema } from './SaleReturnCreateWithoutWarehouseInput.schema';
import { SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema as SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleReturnUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleReturnUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutWarehouseInput>;
export const SaleReturnUpsertWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
