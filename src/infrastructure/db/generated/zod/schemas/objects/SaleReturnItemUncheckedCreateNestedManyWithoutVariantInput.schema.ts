import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemCreateWithoutVariantInputObjectSchema as SaleReturnItemCreateWithoutVariantInputObjectSchema } from './SaleReturnItemCreateWithoutVariantInput.schema';
import { SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema as SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedCreateWithoutVariantInput.schema';
import { SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema as SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema } from './SaleReturnItemCreateOrConnectWithoutVariantInput.schema';
import { SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema as SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema } from './SaleReturnItemCreateManyVariantInputEnvelope.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './SaleReturnItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnItemCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => SaleReturnItemCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema), z.lazy(() => SaleReturnItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaleReturnItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUncheckedCreateNestedManyWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUncheckedCreateNestedManyWithoutVariantInput>;
export const SaleReturnItemUncheckedCreateNestedManyWithoutVariantInputObjectZodSchema = makeSchema();
