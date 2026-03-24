import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutCreatedByUserInput.schema';
import { InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateOrConnectWithoutCreatedByUserInput.schema';
import { InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema as InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema } from './InventoryTransferCreateManyCreatedByUserInputEnvelope.schema';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => InventoryTransferCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InventoryTransferCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema), z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InventoryTransferCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateNestedManyWithoutCreatedByUserInput>;
export const InventoryTransferCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
