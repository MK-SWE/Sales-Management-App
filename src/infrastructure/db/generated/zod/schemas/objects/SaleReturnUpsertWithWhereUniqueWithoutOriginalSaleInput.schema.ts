import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnUpdateWithoutOriginalSaleInputObjectSchema as SaleReturnUpdateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUpdateWithoutOriginalSaleInput.schema';
import { SaleReturnUncheckedUpdateWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedUpdateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutOriginalSaleInput.schema';
import { SaleReturnCreateWithoutOriginalSaleInputObjectSchema as SaleReturnCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateWithoutOriginalSaleInput.schema';
import { SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedCreateWithoutOriginalSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleReturnUpdateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutOriginalSaleInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema)])
}).strict();
export const SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInputObjectSchema: z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInput>;
export const SaleReturnUpsertWithWhereUniqueWithoutOriginalSaleInputObjectZodSchema = makeSchema();
