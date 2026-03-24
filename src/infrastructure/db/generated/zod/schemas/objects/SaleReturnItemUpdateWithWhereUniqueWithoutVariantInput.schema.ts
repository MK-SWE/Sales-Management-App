import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemUpdateWithoutVariantInputObjectSchema as SaleReturnItemUpdateWithoutVariantInputObjectSchema } from './SaleReturnItemUpdateWithoutVariantInput.schema';
import { SaleReturnItemUncheckedUpdateWithoutVariantInputObjectSchema as SaleReturnItemUncheckedUpdateWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedUpdateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnItemUpdateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedUpdateWithoutVariantInputObjectSchema)])
}).strict();
export const SaleReturnItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpdateWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateWithWhereUniqueWithoutVariantInput>;
export const SaleReturnItemUpdateWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
