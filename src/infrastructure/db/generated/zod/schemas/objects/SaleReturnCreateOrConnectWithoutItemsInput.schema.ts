import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema';
import { SaleReturnCreateWithoutItemsInputObjectSchema as SaleReturnCreateWithoutItemsInputObjectSchema } from './SaleReturnCreateWithoutItemsInput.schema';
import { SaleReturnUncheckedCreateWithoutItemsInputObjectSchema as SaleReturnUncheckedCreateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const SaleReturnCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateOrConnectWithoutItemsInput>;
export const SaleReturnCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
