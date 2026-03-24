import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutOriginalSaleInputObjectSchema as SaleReturnUpdateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUpdateWithoutOriginalSaleInput.schema';
import { SaleReturnUncheckedUpdateWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedUpdateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutOriginalSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutOriginalSaleInputObjectSchema)])
}).strict();
export const SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInput>;
export const SaleReturnUpdateWithWhereUniqueWithoutOriginalSaleInputObjectZodSchema = makeSchema();
