import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemUpdateWithoutVariantInputObjectSchema as SaleReturnItemUpdateWithoutVariantInputObjectSchema } from './SaleReturnItemUpdateWithoutVariantInput.schema';
import { SaleReturnItemUncheckedUpdateWithoutVariantInputObjectSchema as SaleReturnItemUncheckedUpdateWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedUpdateWithoutVariantInput.schema';
import { SaleReturnItemCreateWithoutVariantInputObjectSchema as SaleReturnItemCreateWithoutVariantInputObjectSchema } from './SaleReturnItemCreateWithoutVariantInput.schema';
import { SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema as SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleReturnItemUpdateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedUpdateWithoutVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const SaleReturnItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpsertWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpsertWithWhereUniqueWithoutVariantInput>;
export const SaleReturnItemUpsertWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
