import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemScalarWhereInputObjectSchema as SaleReturnItemScalarWhereInputObjectSchema } from './SaleReturnItemScalarWhereInput.schema';
import { SaleReturnItemUpdateManyMutationInputObjectSchema as SaleReturnItemUpdateManyMutationInputObjectSchema } from './SaleReturnItemUpdateManyMutationInput.schema';
import { SaleReturnItemUncheckedUpdateManyWithoutVariantInputObjectSchema as SaleReturnItemUncheckedUpdateManyWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedUpdateManyWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnItemUpdateManyMutationInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedUpdateManyWithoutVariantInputObjectSchema)])
}).strict();
export const SaleReturnItemUpdateManyWithWhereWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpdateManyWithWhereWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateManyWithWhereWithoutVariantInput>;
export const SaleReturnItemUpdateManyWithWhereWithoutVariantInputObjectZodSchema = makeSchema();
