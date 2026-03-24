import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateWithoutSaleReturnInput.schema';
import { SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutSaleReturnInput.schema';
import { SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateOrConnectWithoutSaleReturnInput.schema';
import { SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema as SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema } from './SaleReturnItemCreateManySaleReturnInputEnvelope.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemCreateWithoutSaleReturnInputObjectSchema).array(), z.lazy(() => SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInput>;
export const SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInputObjectZodSchema = makeSchema();
