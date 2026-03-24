import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemCreateWithoutVariantInputObjectSchema as InventoryTransferItemCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedCreateWithoutVariantInput.schema';
import { InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema as InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateOrConnectWithoutVariantInput.schema';
import { InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema as InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema } from './InventoryTransferItemCreateManyVariantInputEnvelope.schema';
import { InventoryTransferItemWhereUniqueInputObjectSchema as InventoryTransferItemWhereUniqueInputObjectSchema } from './InventoryTransferItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferItemCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemCreateWithoutVariantInputObjectSchema).array(), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemUncheckedCreateWithoutVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema), z.lazy(() => InventoryTransferItemCreateOrConnectWithoutVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferItemCreateManyVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferItemCreateNestedManyWithoutVariantInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemCreateNestedManyWithoutVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemCreateNestedManyWithoutVariantInput>;
export const InventoryTransferItemCreateNestedManyWithoutVariantInputObjectZodSchema = makeSchema();
