import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutReturnsInputObjectSchema as SaleCreateWithoutReturnsInputObjectSchema } from './SaleCreateWithoutReturnsInput.schema';
import { SaleUncheckedCreateWithoutReturnsInputObjectSchema as SaleUncheckedCreateWithoutReturnsInputObjectSchema } from './SaleUncheckedCreateWithoutReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaleCreateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutReturnsInputObjectSchema)])
}).strict();
export const SaleCreateOrConnectWithoutReturnsInputObjectSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateOrConnectWithoutReturnsInput>;
export const SaleCreateOrConnectWithoutReturnsInputObjectZodSchema = makeSchema();
