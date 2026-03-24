import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemCreateWithoutVariantInputObjectSchema as SaleReturnItemCreateWithoutVariantInputObjectSchema } from './SaleReturnItemCreateWithoutVariantInput.schema';
import { SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema as SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema)])
}).strict();
export const SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateOrConnectWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateOrConnectWithoutVariantInput>;
export const SaleReturnItemCreateOrConnectWithoutVariantInputObjectZodSchema = makeSchema();
