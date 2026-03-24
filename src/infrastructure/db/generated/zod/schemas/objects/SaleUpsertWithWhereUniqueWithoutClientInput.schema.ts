import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutClientInputObjectSchema as SaleUpdateWithoutClientInputObjectSchema } from './SaleUpdateWithoutClientInput.schema';
import { SaleUncheckedUpdateWithoutClientInputObjectSchema as SaleUncheckedUpdateWithoutClientInputObjectSchema } from './SaleUncheckedUpdateWithoutClientInput.schema';
import { SaleCreateWithoutClientInputObjectSchema as SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema as SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleUpdateWithoutClientInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleCreateWithoutClientInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutClientInput>;
export const SaleUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
