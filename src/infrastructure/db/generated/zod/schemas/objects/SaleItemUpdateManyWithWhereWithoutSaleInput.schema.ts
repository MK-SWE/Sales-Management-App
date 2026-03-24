import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemScalarWhereInputObjectSchema as SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema';
import { SaleItemUpdateManyMutationInputObjectSchema as SaleItemUpdateManyMutationInputObjectSchema } from './SaleItemUpdateManyMutationInput.schema';
import { SaleItemUncheckedUpdateManyWithoutSaleInputObjectSchema as SaleItemUncheckedUpdateManyWithoutSaleInputObjectSchema } from './SaleItemUncheckedUpdateManyWithoutSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleItemUpdateManyMutationInputObjectSchema), z.lazy(() => SaleItemUncheckedUpdateManyWithoutSaleInputObjectSchema)])
}).strict();
export const SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema: z.ZodType<Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput>;
export const SaleItemUpdateManyWithWhereWithoutSaleInputObjectZodSchema = makeSchema();
