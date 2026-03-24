import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemUpdateWithoutSaleReturnInputObjectSchema as SaleReturnItemUpdateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUpdateWithoutSaleReturnInput.schema';
import { SaleReturnItemUncheckedUpdateWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedUpdateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedUpdateWithoutSaleReturnInput.schema';
import { SaleReturnItemCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateWithoutSaleReturnInput.schema';
import { SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutSaleReturnInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleReturnItemUpdateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedUpdateWithoutSaleReturnInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutSaleReturnInputObjectSchema)])
}).strict();
export const SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput>;
export const SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInputObjectZodSchema = makeSchema();
