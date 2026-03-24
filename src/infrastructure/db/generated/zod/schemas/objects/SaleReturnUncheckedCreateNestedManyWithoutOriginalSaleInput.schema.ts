import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutOriginalSaleInputObjectSchema as SaleReturnCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateWithoutOriginalSaleInput.schema';
import { SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedCreateWithoutOriginalSaleInput.schema';
import { SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema as SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateOrConnectWithoutOriginalSaleInput.schema';
import { SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema as SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema } from './SaleReturnCreateManyOriginalSaleInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutOriginalSaleInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnUncheckedCreateNestedManyWithoutOriginalSaleInputObjectSchema: z.ZodType<Prisma.SaleReturnUncheckedCreateNestedManyWithoutOriginalSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUncheckedCreateNestedManyWithoutOriginalSaleInput>;
export const SaleReturnUncheckedCreateNestedManyWithoutOriginalSaleInputObjectZodSchema = makeSchema();
