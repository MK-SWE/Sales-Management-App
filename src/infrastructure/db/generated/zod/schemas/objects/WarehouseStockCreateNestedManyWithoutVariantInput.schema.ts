import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateWithoutVariantInputObjectSchema as WarehouseStockCreateWithoutVariantInputObjectSchema } from './WarehouseStockCreateWithoutVariantInput.schema';
import { WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema as WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutVariantInput.schema';
import { WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema as WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema } from './WarehouseStockCreateOrConnectWithoutVariantInput.schema';
import { WarehouseStockCreateManyVariantInputEnvelopeObjectSchema as WarehouseStockCreateManyVariantInputEnvelopeObjectSchema } from './WarehouseStockCreateManyVariantInputEnvelope.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => WarehouseStockCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseStockCreateManyVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseStockCreateNestedManyWithoutVariantInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateNestedManyWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateNestedManyWithoutVariantInput>;
export const WarehouseStockCreateNestedManyWithoutVariantInputObjectZodSchema = makeSchema();
