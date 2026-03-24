import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutCreatedByUserInputObjectSchema as SaleReturnCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedCreateWithoutCreatedByUserInput.schema';
import { SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema as SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateOrConnectWithoutCreatedByUserInput.schema';
import { SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema as SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema } from './SaleReturnCreateManyCreatedByUserInputEnvelope.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleReturnWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateNestedManyWithoutCreatedByUserInput>;
export const SaleReturnCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
