import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnUpdateWithoutItemsInputObjectSchema as SaleReturnUpdateWithoutItemsInputObjectSchema } from './SaleReturnUpdateWithoutItemsInput.schema';
import { SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema as SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutItemsInput.schema';
import { SaleReturnCreateWithoutItemsInputObjectSchema as SaleReturnCreateWithoutItemsInputObjectSchema } from './SaleReturnCreateWithoutItemsInput.schema';
import { SaleReturnUncheckedCreateWithoutItemsInputObjectSchema as SaleReturnUncheckedCreateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedCreateWithoutItemsInput.schema';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './SaleReturnWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SaleReturnUpdateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleReturnCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => SaleReturnWhereInputObjectSchema).optional()
}).strict();
export const SaleReturnUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleReturnUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpsertWithoutItemsInput>;
export const SaleReturnUpsertWithoutItemsInputObjectZodSchema = makeSchema();
