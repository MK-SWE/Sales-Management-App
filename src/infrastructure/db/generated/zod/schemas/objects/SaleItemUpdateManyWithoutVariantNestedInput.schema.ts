import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemCreateWithoutVariantInputObjectSchema as SaleItemCreateWithoutVariantInputObjectSchema } from './SaleItemCreateWithoutVariantInput.schema';
import { SaleItemUncheckedCreateWithoutVariantInputObjectSchema as SaleItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleItemUncheckedCreateWithoutVariantInput.schema';
import { SaleItemCreateOrConnectWithoutVariantInputObjectSchema as SaleItemCreateOrConnectWithoutVariantInputObjectSchema } from './SaleItemCreateOrConnectWithoutVariantInput.schema';
import { SaleItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema as SaleItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from './SaleItemUpsertWithWhereUniqueWithoutVariantInput.schema';
import { SaleItemCreateManyVariantInputEnvelopeObjectSchema as SaleItemCreateManyVariantInputEnvelopeObjectSchema } from './SaleItemCreateManyVariantInputEnvelope.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema as SaleItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from './SaleItemUpdateWithWhereUniqueWithoutVariantInput.schema';
import { SaleItemUpdateManyWithWhereWithoutVariantInputObjectSchema as SaleItemUpdateManyWithWhereWithoutVariantInputObjectSchema } from './SaleItemUpdateManyWithWhereWithoutVariantInput.schema';
import { SaleItemScalarWhereInputObjectSchema as SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => SaleItemUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleItemCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => SaleItemCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleItemCreateManyVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleItemUpdateManyWithWhereWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUpdateManyWithWhereWithoutVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleItemScalarWhereInputObjectSchema), z.lazy(() => SaleItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleItemUpdateManyWithoutVariantNestedInputObjectSchema: z.ZodType<Prisma.SaleItemUpdateManyWithoutVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpdateManyWithoutVariantNestedInput>;
export const SaleItemUpdateManyWithoutVariantNestedInputObjectZodSchema = makeSchema();
