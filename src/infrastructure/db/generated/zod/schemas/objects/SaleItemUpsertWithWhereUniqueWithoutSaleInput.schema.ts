import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutSaleInputObjectSchema as SaleItemUpdateWithoutSaleInputObjectSchema } from './SaleItemUpdateWithoutSaleInput.schema';
import { SaleItemUncheckedUpdateWithoutSaleInputObjectSchema as SaleItemUncheckedUpdateWithoutSaleInputObjectSchema } from './SaleItemUncheckedUpdateWithoutSaleInput.schema';
import { SaleItemCreateWithoutSaleInputObjectSchema as SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema as SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleItemUpdateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUncheckedUpdateWithoutSaleInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema)])
}).strict();
export const SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema: z.ZodType<Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput>;
export const SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectZodSchema = makeSchema();
