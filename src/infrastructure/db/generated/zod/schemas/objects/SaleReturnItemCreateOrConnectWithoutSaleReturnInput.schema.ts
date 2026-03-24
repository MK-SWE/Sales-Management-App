import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateWithoutSaleReturnInput.schema';
import { SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutSaleReturnInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema)])
}).strict();
export const SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateOrConnectWithoutSaleReturnInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateOrConnectWithoutSaleReturnInput>;
export const SaleReturnItemCreateOrConnectWithoutSaleReturnInputObjectZodSchema = makeSchema();
