import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutCreatedByUserInputObjectSchema as SaleCreateWithoutCreatedByUserInputObjectSchema } from './SaleCreateWithoutCreatedByUserInput.schema';
import { SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedCreateWithoutCreatedByUserInput.schema';
import { SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema as SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './SaleCreateOrConnectWithoutCreatedByUserInput.schema';
import { SaleCreateManyCreatedByUserInputEnvelopeObjectSchema as SaleCreateManyCreatedByUserInputEnvelopeObjectSchema } from './SaleCreateManyCreatedByUserInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateNestedManyWithoutCreatedByUserInput>;
export const SaleCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
