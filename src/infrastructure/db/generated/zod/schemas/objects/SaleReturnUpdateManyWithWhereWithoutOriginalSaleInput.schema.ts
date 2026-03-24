import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema';
import { SaleReturnUpdateManyMutationInputObjectSchema as SaleReturnUpdateManyMutationInputObjectSchema } from './SaleReturnUpdateManyMutationInput.schema';
import { SaleReturnUncheckedUpdateManyWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedUpdateManyWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedUpdateManyWithoutOriginalSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateManyMutationInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateManyWithoutOriginalSaleInputObjectSchema)])
}).strict();
export const SaleReturnUpdateManyWithWhereWithoutOriginalSaleInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutOriginalSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutOriginalSaleInput>;
export const SaleReturnUpdateManyWithWhereWithoutOriginalSaleInputObjectZodSchema = makeSchema();
