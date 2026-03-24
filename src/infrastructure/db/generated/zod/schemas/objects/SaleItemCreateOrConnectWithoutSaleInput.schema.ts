import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemCreateWithoutSaleInputObjectSchema as SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema as SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema)])
}).strict();
export const SaleItemCreateOrConnectWithoutSaleInputObjectSchema: z.ZodType<Prisma.SaleItemCreateOrConnectWithoutSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateOrConnectWithoutSaleInput>;
export const SaleItemCreateOrConnectWithoutSaleInputObjectZodSchema = makeSchema();
