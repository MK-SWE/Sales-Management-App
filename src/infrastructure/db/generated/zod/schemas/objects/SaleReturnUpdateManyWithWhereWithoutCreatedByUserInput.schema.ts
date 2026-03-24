import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnScalarWhereInputObjectSchema as SaleReturnScalarWhereInputObjectSchema } from './SaleReturnScalarWhereInput.schema';
import { SaleReturnUpdateManyMutationInputObjectSchema as SaleReturnUpdateManyMutationInputObjectSchema } from './SaleReturnUpdateManyMutationInput.schema';
import { SaleReturnUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleReturnScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaleReturnUpdateManyMutationInputObjectSchema), z.lazy(() => SaleReturnUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleReturnUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyWithWhereWithoutCreatedByUserInput>;
export const SaleReturnUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
