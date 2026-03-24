import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemScalarWhereInputObjectSchema as SaleReturnItemScalarWhereInputObjectSchema } from './SaleReturnItemScalarWhereInput.schema';
import { SaleReturnItemUpdateManyMutationInputObjectSchema as SaleReturnItemUpdateManyMutationInputObjectSchema } from './SaleReturnItemUpdateManyMutationInput.schema';
import { SaleReturnItemUncheckedUpdateManyWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedUpdateManyWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedUpdateManyWithoutSaleReturnInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnItemUpdateManyMutationInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedUpdateManyWithoutSaleReturnInputObjectSchema)])
}).strict();
export const SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput>;
export const SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInputObjectZodSchema = makeSchema();
