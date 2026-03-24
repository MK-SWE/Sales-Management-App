import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutSaleInputObjectSchema as SaleItemUpdateWithoutSaleInputObjectSchema } from './SaleItemUpdateWithoutSaleInput.schema';
import { SaleItemUncheckedUpdateWithoutSaleInputObjectSchema as SaleItemUncheckedUpdateWithoutSaleInputObjectSchema } from './SaleItemUncheckedUpdateWithoutSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleItemUpdateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUncheckedUpdateWithoutSaleInputObjectSchema)])
}).strict();
export const SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema: z.ZodType<Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput>;
export const SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectZodSchema = makeSchema();
