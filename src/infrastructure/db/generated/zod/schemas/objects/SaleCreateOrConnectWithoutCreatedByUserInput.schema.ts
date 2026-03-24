import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutCreatedByUserInputObjectSchema as SaleCreateWithoutCreatedByUserInputObjectSchema } from './SaleCreateWithoutCreatedByUserInput.schema';
import { SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema as SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const SaleCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateOrConnectWithoutCreatedByUserInput>;
export const SaleCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
