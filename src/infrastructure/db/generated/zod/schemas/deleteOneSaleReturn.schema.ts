import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './objects/SaleReturnSelect.schema';
import { SaleReturnIncludeObjectSchema as SaleReturnIncludeObjectSchema } from './objects/SaleReturnInclude.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './objects/SaleReturnWhereUniqueInput.schema';

export const SaleReturnDeleteOneSchema: z.ZodType<Prisma.SaleReturnDeleteArgs> = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), where: SaleReturnWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleReturnDeleteArgs>;

export const SaleReturnDeleteOneZodSchema = z.object({ select: SaleReturnSelectObjectSchema.optional(), include: SaleReturnIncludeObjectSchema.optional(), where: SaleReturnWhereUniqueInputObjectSchema }).strict();