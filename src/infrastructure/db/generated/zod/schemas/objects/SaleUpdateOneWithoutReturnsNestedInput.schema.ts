import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutReturnsInputObjectSchema as SaleCreateWithoutReturnsInputObjectSchema } from './SaleCreateWithoutReturnsInput.schema';
import { SaleUncheckedCreateWithoutReturnsInputObjectSchema as SaleUncheckedCreateWithoutReturnsInputObjectSchema } from './SaleUncheckedCreateWithoutReturnsInput.schema';
import { SaleCreateOrConnectWithoutReturnsInputObjectSchema as SaleCreateOrConnectWithoutReturnsInputObjectSchema } from './SaleCreateOrConnectWithoutReturnsInput.schema';
import { SaleUpsertWithoutReturnsInputObjectSchema as SaleUpsertWithoutReturnsInputObjectSchema } from './SaleUpsertWithoutReturnsInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './SaleWhereInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateToOneWithWhereWithoutReturnsInputObjectSchema as SaleUpdateToOneWithWhereWithoutReturnsInputObjectSchema } from './SaleUpdateToOneWithWhereWithoutReturnsInput.schema';
import { SaleUpdateWithoutReturnsInputObjectSchema as SaleUpdateWithoutReturnsInputObjectSchema } from './SaleUpdateWithoutReturnsInput.schema';
import { SaleUncheckedUpdateWithoutReturnsInputObjectSchema as SaleUncheckedUpdateWithoutReturnsInputObjectSchema } from './SaleUncheckedUpdateWithoutReturnsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SaleCreateOrConnectWithoutReturnsInputObjectSchema).optional(),
  upsert: z.lazy(() => SaleUpsertWithoutReturnsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SaleWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SaleWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SaleUpdateToOneWithWhereWithoutReturnsInputObjectSchema), z.lazy(() => SaleUpdateWithoutReturnsInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutReturnsInputObjectSchema)]).optional()
}).strict();
export const SaleUpdateOneWithoutReturnsNestedInputObjectSchema: z.ZodType<Prisma.SaleUpdateOneWithoutReturnsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateOneWithoutReturnsNestedInput>;
export const SaleUpdateOneWithoutReturnsNestedInputObjectZodSchema = makeSchema();
