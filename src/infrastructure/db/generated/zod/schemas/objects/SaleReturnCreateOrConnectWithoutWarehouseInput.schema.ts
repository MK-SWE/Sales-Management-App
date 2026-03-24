import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnCreateWithoutWarehouseInputObjectSchema as SaleReturnCreateWithoutWarehouseInputObjectSchema } from './SaleReturnCreateWithoutWarehouseInput.schema';
import { SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema as SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutWarehouseInput>;
export const SaleReturnCreateOrConnectWithoutWarehouseInputObjectZodSchema = makeSchema();
