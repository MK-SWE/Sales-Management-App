import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemCreateWithoutVariantInputObjectSchema as SaleItemCreateWithoutVariantInputObjectSchema } from './SaleItemCreateWithoutVariantInput.schema';
import { SaleItemUncheckedCreateWithoutVariantInputObjectSchema as SaleItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleItemUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleItemUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const SaleItemCreateOrConnectWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleItemCreateOrConnectWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateOrConnectWithoutVariantInput>;
export const SaleItemCreateOrConnectWithoutVariantInputObjectZodSchema = makeSchema();
