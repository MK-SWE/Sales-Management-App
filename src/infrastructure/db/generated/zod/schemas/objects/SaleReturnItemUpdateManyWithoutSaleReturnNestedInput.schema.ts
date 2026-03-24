import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateWithoutSaleReturnInput.schema';
import { SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutSaleReturnInput.schema';
import { SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateOrConnectWithoutSaleReturnInput.schema';
import { SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInputObjectSchema as SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput.schema';
import { SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema as SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema } from './SaleReturnItemCreateManySaleReturnInputEnvelope.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInputObjectSchema as SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput.schema';
import { SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInputObjectSchema as SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput.schema';
import { SaleReturnItemScalarWhereInputObjectSchema as SaleReturnItemScalarWhereInputObjectSchema } from './SaleReturnItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemCreateWithoutSaleReturnInputObjectSchema).array(), z.lazy(() => SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema), z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnItemUpdateManyWithoutSaleReturnNestedInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpdateManyWithoutSaleReturnNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateManyWithoutSaleReturnNestedInput>;
export const SaleReturnItemUpdateManyWithoutSaleReturnNestedInputObjectZodSchema = makeSchema();
