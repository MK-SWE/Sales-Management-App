import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutWarehouseInputObjectSchema as SaleReturnCreateWithoutWarehouseInputObjectSchema } from './SaleReturnCreateWithoutWarehouseInput.schema';
import { SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema as SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedCreateWithoutWarehouseInput.schema';
import { SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema as SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema } from './SaleReturnCreateOrConnectWithoutWarehouseInput.schema';
import { SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema as SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema } from './SaleReturnCreateManyWarehouseInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleReturnUncheckedCreateNestedManyWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUncheckedCreateNestedManyWithoutWarehouseInput>;
export const SaleReturnUncheckedCreateNestedManyWithoutWarehouseInputObjectZodSchema = makeSchema();
