import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutCreatedByUserInputObjectSchema as SaleUpdateWithoutCreatedByUserInputObjectSchema } from './SaleUpdateWithoutCreatedByUserInput.schema';
import { SaleUncheckedUpdateWithoutCreatedByUserInputObjectSchema as SaleUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const SaleUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
