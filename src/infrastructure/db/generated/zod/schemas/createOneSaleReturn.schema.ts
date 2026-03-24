import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './objects/SaleReturnSelect.schema';
import { SaleReturnIncludeObjectSchema as SaleReturnIncludeObjectSchema } from './objects/SaleReturnInclude.schema';
import { SaleReturnCreateInputObjectSchema as SaleReturnCreateInputObjectSchema } from './objects/SaleReturnCreateInput.schema';
import { SaleReturnUncheckedCreateInputObjectSchema as SaleReturnUncheckedCreateInputObjectSchema } from './objects/SaleReturnUncheckedCreateInput.schema';

export const SaleReturnCreateOneSchema: z.ZodType<Prisma.SaleReturnCreateArgs> = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), data: z.union([SaleReturnCreateInputObjectSchema, SaleReturnUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SaleReturnCreateArgs>;

export const SaleReturnCreateOneZodSchema = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), data: z.union([SaleReturnCreateInputObjectSchema, SaleReturnUncheckedCreateInputObjectSchema]) }).strict();