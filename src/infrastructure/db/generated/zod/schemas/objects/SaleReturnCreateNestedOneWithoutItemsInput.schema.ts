import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateWithoutItemsInputObjectSchema as SaleReturnCreateWithoutItemsInputObjectSchema } from './SaleReturnCreateWithoutItemsInput.schema';
import { SaleReturnUncheckedCreateWithoutItemsInputObjectSchema as SaleReturnUncheckedCreateWithoutItemsInputObjectSchema } from './SaleReturnUncheckedCreateWithoutItemsInput.schema';
import { SaleReturnCreateOrConnectWithoutItemsInputObjectSchema as SaleReturnCreateOrConnectWithoutItemsInputObjectSchema } from './SaleReturnCreateOrConnectWithoutItemsInput.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './SaleReturnWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaleReturnCreateWithoutItemsInputObjectSchema), z.lazy(() => SaleReturnUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SaleReturnCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => SaleReturnWhereUniqueInputObjectSchema).optional()
}).strict();
export const SaleReturnCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateNestedOneWithoutItemsInput>;
export const SaleReturnCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
