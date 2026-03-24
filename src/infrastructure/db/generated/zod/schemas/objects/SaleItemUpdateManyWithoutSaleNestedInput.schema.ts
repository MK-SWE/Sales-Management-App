import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemCreateWithoutSaleInputObjectSchema as SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema as SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema';
import { SaleItemCreateOrConnectWithoutSaleInputObjectSchema as SaleItemCreateOrConnectWithoutSaleInputObjectSchema } from './SaleItemCreateOrConnectWithoutSaleInput.schema';
import { SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema as SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema } from './SaleItemUpsertWithWhereUniqueWithoutSaleInput.schema';
import { SaleItemCreateManySaleInputEnvelopeObjectSchema as SaleItemCreateManySaleInputEnvelopeObjectSchema } from './SaleItemCreateManySaleInputEnvelope.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema as SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema } from './SaleItemUpdateWithWhereUniqueWithoutSaleInput.schema';
import { SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema as SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema } from './SaleItemUpdateManyWithWhereWithoutSaleInput.schema';
import { SaleItemScalarWhereInputObjectSchema as SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema).array(), z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema), z.lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleItemCreateManySaleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleItemScalarWhereInputObjectSchema), z.lazy(() => SaleItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleItemUpdateManyWithoutSaleNestedInputObjectSchema: z.ZodType<Prisma.SaleItemUpdateManyWithoutSaleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpdateManyWithoutSaleNestedInput>;
export const SaleItemUpdateManyWithoutSaleNestedInputObjectZodSchema = makeSchema();
