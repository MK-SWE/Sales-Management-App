import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnCreateWithoutOriginalSaleInputObjectSchema as SaleReturnCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateWithoutOriginalSaleInput.schema';
import { SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema as SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema } from './SaleReturnUncheckedCreateWithoutOriginalSaleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutOriginalSaleInputObjectSchema)])
}).strict();
export const SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutOriginalSaleInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutOriginalSaleInput>;
export const SaleReturnCreateOrConnectWithoutOriginalSaleInputObjectZodSchema = makeSchema();
