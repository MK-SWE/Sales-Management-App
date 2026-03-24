import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutClientInputObjectSchema as SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema as SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema';
import { SaleCreateOrConnectWithoutClientInputObjectSchema as SaleCreateOrConnectWithoutClientInputObjectSchema } from './SaleCreateOrConnectWithoutClientInput.schema';
import { SaleCreateManyClientInputEnvelopeObjectSchema as SaleCreateManyClientInputEnvelopeObjectSchema } from './SaleCreateManyClientInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutClientInputObjectSchema), z.lazy(() => SaleCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateNestedManyWithoutClientInput>;
export const SaleCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
