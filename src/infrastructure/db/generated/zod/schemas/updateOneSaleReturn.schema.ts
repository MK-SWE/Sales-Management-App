import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './objects/SaleReturnSelect.schema';
import { SaleReturnIncludeObjectSchema as SaleReturnIncludeObjectSchema } from './objects/SaleReturnInclude.schema';
import { SaleReturnUpdateInputObjectSchema as SaleReturnUpdateInputObjectSchema } from './objects/SaleReturnUpdateInput.schema';
import { SaleReturnUncheckedUpdateInputObjectSchema as SaleReturnUncheckedUpdateInputObjectSchema } from './objects/SaleReturnUncheckedUpdateInput.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './objects/SaleReturnWhereUniqueInput.schema';

export const SaleReturnUpdateOneSchema: z.ZodType<Prisma.SaleReturnUpdateArgs> = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), data: z.union([SaleReturnUpdateInputObjectSchema, SaleReturnUncheckedUpdateInputObjectSchema]), where: SaleReturnWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleReturnUpdateArgs>;

export const SaleReturnUpdateOneZodSchema = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), data: z.union([SaleReturnUpdateInputObjectSchema, SaleReturnUncheckedUpdateInputObjectSchema]), where: SaleReturnWhereUniqueInputObjectSchema }).strict();