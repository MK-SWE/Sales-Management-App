import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutWarehouseInputObjectSchema as SaleCreateWithoutWarehouseInputObjectSchema } from './SaleCreateWithoutWarehouseInput.schema';
import { SaleUncheckedCreateWithoutWarehouseInputObjectSchema as SaleUncheckedCreateWithoutWarehouseInputObjectSchema } from './SaleUncheckedCreateWithoutWarehouseInput.schema';
import { SaleCreateOrConnectWithoutWarehouseInputObjectSchema as SaleCreateOrConnectWithoutWarehouseInputObjectSchema } from './SaleCreateOrConnectWithoutWarehouseInput.schema';
import { SaleCreateManyWarehouseInputEnvelopeObjectSchema as SaleCreateManyWarehouseInputEnvelopeObjectSchema } from './SaleCreateManyWarehouseInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleCreateWithoutWarehouseInputObjectSchema).array(), z.lazy(() => SaleUncheckedCreateWithoutWarehouseInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutWarehouseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleCreateOrConnectWithoutWarehouseInputObjectSchema), z.lazy(() => SaleCreateOrConnectWithoutWarehouseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleCreateManyWarehouseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleCreateNestedManyWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.SaleCreateNestedManyWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateNestedManyWithoutWarehouseInput>;
export const SaleCreateNestedManyWithoutWarehouseInputObjectZodSchema = makeSchema();
