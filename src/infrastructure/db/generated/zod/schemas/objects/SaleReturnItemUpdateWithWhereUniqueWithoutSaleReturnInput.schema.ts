import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemUpdateWithoutSaleReturnInputObjectSchema as SaleReturnItemUpdateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUpdateWithoutSaleReturnInput.schema';
import { SaleReturnItemUncheckedUpdateWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedUpdateWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedUpdateWithoutSaleReturnInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnItemUpdateWithoutSaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedUpdateWithoutSaleReturnInputObjectSchema)])
}).strict();
export const SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput>;
export const SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInputObjectZodSchema = makeSchema();
