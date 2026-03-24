import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateWithoutItemsInputObjectSchema as SaleCreateWithoutItemsInputObjectSchema } from './SaleCreateWithoutItemsInput.schema';
import { SaleUncheckedCreateWithoutItemsInputObjectSchema as SaleUncheckedCreateWithoutItemsInputObjectSchema } from './SaleUncheckedCreateWithoutItemsInput.schema';
import { SaleCreateOrConnectWithoutItemsInputObjectSchema as SaleCreateOrConnectWithoutItemsInputObjectSchema } from './SaleCreateOrConnectWithoutItemsInput.schema';
import { SaleUpsertWithoutItemsInputObjectSchema as SaleUpsertWithoutItemsInputObjectSchema } from './SaleUpsertWithoutItemsInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateToOneWithWhereWithoutItemsInputObjectSchema as SaleUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './SaleUpdateToOneWithWhereWithoutItemsInput.schema';
import { SaleUpdateWithoutItemsInputObjectSchema as SaleUpdateWithoutItemsInputObjectSchema } from './SaleUpdateWithoutItemsInput.schema';
import { SaleUncheckedUpdateWithoutItemsInputObjectSchema as SaleUncheckedUpdateWithoutItemsInputObjectSchema } from './SaleUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SaleCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => SaleUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SaleUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => SaleUpdateWithoutItemsInputObjectSchema), z.lazy(() => SaleUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const SaleUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.SaleUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUpdateOneRequiredWithoutItemsNestedInput>;
export const SaleUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
