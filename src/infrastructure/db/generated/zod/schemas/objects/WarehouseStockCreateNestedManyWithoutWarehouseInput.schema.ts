import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateWithoutWarehouseInputObjectSchema as WarehouseStockCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateWithoutWarehouseInput.schema';
import { WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutWarehouseInput.schema';
import { WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema as WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateOrConnectWithoutWarehouseInput.schema';
import { WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema as WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema } from './WarehouseStockCreateManyWarehouseInputEnvelope.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WarehouseStockCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema), z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WarehouseStockCreateNestedManyWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateNestedManyWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateNestedManyWithoutWarehouseInput>;
export const WarehouseStockCreateNestedManyWithoutWarehouseInputObjectZodSchema = makeSchema();
