import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutVariantInputObjectSchema as SaleItemUpdateWithoutVariantInputObjectSchema } from './SaleItemUpdateWithoutVariantInput.schema';
import { SaleItemUncheckedUpdateWithoutVariantInputObjectSchema as SaleItemUncheckedUpdateWithoutVariantInputObjectSchema } from './SaleItemUncheckedUpdateWithoutVariantInput.schema';
import { SaleItemCreateWithoutVariantInputObjectSchema as SaleItemCreateWithoutVariantInputObjectSchema } from './SaleItemCreateWithoutVariantInput.schema';
import { SaleItemUncheckedCreateWithoutVariantInputObjectSchema as SaleItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleItemUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleItemUpdateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUncheckedUpdateWithoutVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const SaleItemUpsertWithWhereUniqueWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleItemUpsertWithWhereUniqueWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpsertWithWhereUniqueWithoutVariantInput>;
export const SaleItemUpsertWithWhereUniqueWithoutVariantInputObjectZodSchema = makeSchema();
