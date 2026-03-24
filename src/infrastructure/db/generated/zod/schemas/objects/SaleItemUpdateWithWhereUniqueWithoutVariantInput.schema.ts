import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutVariantInputObjectSchema as SaleItemUpdateWithoutVariantInputObjectSchema } from './SaleItemUpdateWithoutVariantInput.schema';
import { SaleItemUncheckedUpdateWithoutVariantInputObjectSchema as SaleItemUncheckedUpdateWithoutVariantInputObjectSchema } from './SaleItemUncheckedUpdateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleItemUpdateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUncheckedUpdateWithoutVariantInputObjectSchema)])
}).strict();
export const SaleItemUpdateWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleItemUpdateWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpdateWithWhereUniqueWithoutVariantInput>;
export const SaleItemUpdateWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
