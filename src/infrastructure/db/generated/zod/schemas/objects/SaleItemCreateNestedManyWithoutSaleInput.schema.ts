import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemCreateWithoutSaleInputObjectSchema as SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema as SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema';
import { SaleItemCreateOrConnectWithoutSaleInputObjectSchema as SaleItemCreateOrConnectWithoutSaleInputObjectSchema } from './SaleItemCreateOrConnectWithoutSaleInput.schema';
import { SaleItemCreateManySaleInputEnvelopeObjectSchema as SaleItemCreateManySaleInputEnvelopeObjectSchema } from './SaleItemCreateManySaleInputEnvelope.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema).array(), z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema), z.lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleItemCreateManySaleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleItemWhereUniqueInputObjectSchema), z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleItemCreateNestedManyWithoutSaleInputObjectSchema: z.ZodType<Prisma.SaleItemCreateNestedManyWithoutSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateNestedManyWithoutSaleInput>;
export const SaleItemCreateNestedManyWithoutSaleInputObjectZodSchema = makeSchema();
