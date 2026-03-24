import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateWithoutVariantInputObjectSchema as WarehouseStockCreateWithoutVariantInputObjectSchema } from './WarehouseStockCreateWithoutVariantInput.schema';
import { WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema as WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutVariantInput.schema';
import { WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema as WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema } from './WarehouseStockCreateOrConnectWithoutVariantInput.schema';
import { WarehouseStockUpsertWithWhereUniqueWithoutVariantInputObjectSchema as WarehouseStockUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from './WarehouseStockUpsertWithWhereUniqueWithoutVariantInput.schema';
import { WarehouseStockCreateManyVariantInputEnvelopeObjectSchema as WarehouseStockCreateManyVariantInputEnvelopeObjectSchema } from './WarehouseStockCreateManyVariantInputEnvelope.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockUpdateWithWhereUniqueWithoutVariantInputObjectSchema as WarehouseStockUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from './WarehouseStockUpdateWithWhereUniqueWithoutVariantInput.schema';
import { WarehouseStockUpdateManyWithWhereWithoutVariantInputObjectSchema as WarehouseStockUpdateManyWithWhereWithoutVariantInputObjectSchema } from './WarehouseStockUpdateManyWithWhereWithoutVariantInput.schema';
import { WarehouseStockScalarWhereInputObjectSchema as WarehouseStockScalarWhereInputObjectSchema } from './WarehouseStockScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WarehouseStockUpsertWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUpsertWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseStockCreateManyVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WarehouseStockUpdateWithWhereUniqueWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUpdateWithWhereUniqueWithoutVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WarehouseStockUpdateManyWithWhereWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUpdateManyWithWhereWithoutVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WarehouseStockScalarWhereInputObjectSchema), z.lazy(() => WarehouseStockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseStockUpdateManyWithoutVariantNestedInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpdateManyWithoutVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpdateManyWithoutVariantNestedInput>;
export const WarehouseStockUpdateManyWithoutVariantNestedInputObjectZodSchema = makeSchema();
