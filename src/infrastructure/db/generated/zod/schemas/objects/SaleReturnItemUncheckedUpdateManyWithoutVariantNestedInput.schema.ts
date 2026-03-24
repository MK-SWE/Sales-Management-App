import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemCreateWithoutVariantInputObjectSchema as SaleReturnItemCreateWithoutVariantInputObjectSchema } from './SaleReturnItemCreateWithoutVariantInput.schema';
import { SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema as SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutVariantInput.schema';
import { SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema as SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema } from './SaleReturnItemCreateOrConnectWithoutVariantInput.schema';
import { SaleReturnItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema as SaleReturnItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from './SaleReturnItemUpsertWithWhereUniqueWithoutVariantInput.schema';
import { SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema as SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema } from './SaleReturnItemCreateManyVariantInputEnvelope.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema as SaleReturnItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from './SaleReturnItemUpdateWithWhereUniqueWithoutVariantInput.schema';
import { SaleReturnItemUpdateManyWithWhereWithoutVariantInputObjectSchema as SaleReturnItemUpdateManyWithWhereWithoutVariantInputObjectSchema } from './SaleReturnItemUpdateManyWithWhereWithoutVariantInput.schema';
import { SaleReturnItemScalarWhereInputObjectSchema as SaleReturnItemScalarWhereInputObjectSchema } from './SaleReturnItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleReturnItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleReturnItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleReturnItemUpdateManyWithWhereWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUpdateManyWithWhereWithoutVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema), z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInput>;
export const SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInputObjectZodSchema = makeSchema();
