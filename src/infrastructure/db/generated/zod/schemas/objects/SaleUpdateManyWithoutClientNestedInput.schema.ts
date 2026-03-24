import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutClientInputObjectSchema as SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema as SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema';
import { SaleCreateOrConnectWithoutClientInputObjectSchema as SaleCreateOrConnectWithoutClientInputObjectSchema } from './SaleCreateOrConnectWithoutClientInput.schema';
import { SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema as SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutClientInput.schema';
import { SaleCreateManyClientInputEnvelopeObjectSchema as SaleCreateManyClientInputEnvelopeObjectSchema } from './SaleCreateManyClientInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema as SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutClientInput.schema';
import { SaleUpdateManyWithWhereWithoutClientInputObjectSchema as SaleUpdateManyWithWhereWithoutClientInputObjectSchema } from './SaleUpdateManyWithWhereWithoutClientInput.schema';
import { SaleScalarWhereInputObjectSchema as SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutClientInputObjectSchema), z.lazy(() => SaleCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => SaleUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleScalarWhereInputObjectSchema), z.lazy(() => SaleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.SaleUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateManyWithoutClientNestedInput>;
export const SaleUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
