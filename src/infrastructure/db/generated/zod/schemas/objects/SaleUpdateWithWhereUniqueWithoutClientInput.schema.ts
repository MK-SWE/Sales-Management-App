import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutClientInputObjectSchema as SaleUpdateWithoutClientInputObjectSchema } from './SaleUpdateWithoutClientInput.schema';
import { SaleUncheckedUpdateWithoutClientInputObjectSchema as SaleUncheckedUpdateWithoutClientInputObjectSchema } from './SaleUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaleUpdateWithoutClientInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutClientInput>;
export const SaleUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
