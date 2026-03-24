import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemScalarWhereInputObjectSchema as SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema';
import { SaleItemUpdateManyMutationInputObjectSchema as SaleItemUpdateManyMutationInputObjectSchema } from './SaleItemUpdateManyMutationInput.schema';
import { SaleItemUncheckedUpdateManyWithoutVariantInputObjectSchema as SaleItemUncheckedUpdateManyWithoutVariantInputObjectSchema } from './SaleItemUncheckedUpdateManyWithoutVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleItemUpdateManyMutationInputObjectSchema), z.lazy(() => SaleItemUncheckedUpdateManyWithoutVariantInputObjectSchema)])
}).strict();
export const SaleItemUpdateManyWithWhereWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleItemUpdateManyWithWhereWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemUpdateManyWithWhereWithoutVariantInput>;
export const SaleItemUpdateManyWithWhereWithoutVariantInputObjectZodSchema = makeSchema();
