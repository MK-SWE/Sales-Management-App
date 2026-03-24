import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutCreatedByUserInputObjectSchema as SaleCreateWithoutCreatedByUserInputObjectSchema } from './SaleCreateWithoutCreatedByUserInput.schema';
import { SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedCreateWithoutCreatedByUserInput.schema';
import { SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema as SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './SaleCreateOrConnectWithoutCreatedByUserInput.schema';
import { SaleUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as SaleUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { SaleCreateManyCreatedByUserInputEnvelopeObjectSchema as SaleCreateManyCreatedByUserInputEnvelopeObjectSchema } from './SaleCreateManyCreatedByUserInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as SaleUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { SaleUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as SaleUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './SaleUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { SaleScalarWhereInputObjectSchema as SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleScalarWhereInputObjectSchema), z.lazy(() => SaleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput>;
export const SaleUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
