import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutCreatedByUserInputObjectSchema as SaleUpdateWithoutCreatedByUserInputObjectSchema } from './SaleUpdateWithoutCreatedByUserInput.schema';
import { SaleUncheckedUpdateWithoutCreatedByUserInputObjectSchema as SaleUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedUpdateWithoutCreatedByUserInput.schema';
import { SaleCreateWithoutCreatedByUserInputObjectSchema as SaleCreateWithoutCreatedByUserInputObjectSchema } from './SaleCreateWithoutCreatedByUserInput.schema';
import { SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaleUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SaleCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const SaleUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
