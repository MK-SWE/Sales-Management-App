import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './SaleReturnWhereInput.schema';
import { SaleReturnUpdateWithoutItemsInputObjectSchema as SaleReturnUpdateWithoutItemsInputObjectSchema } from './SaleReturnUpdateWithoutItemsInput.schema';
import { SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema as SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SaleReturnUpdateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const SaleReturnUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateToOneWithWhereWithoutItemsInput>;
export const SaleReturnUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
