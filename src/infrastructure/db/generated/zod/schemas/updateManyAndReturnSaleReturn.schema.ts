import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './objects/SaleReturnSelect.schema';
import { SaleReturnUpdateManyMutationInputObjectSchema as SaleReturnUpdateManyMutationInputObjectSchema } from './objects/SaleReturnUpdateManyMutationInput.schema';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './objects/SaleReturnWhereInput.schema';

export const SaleReturnUpdateManyAndReturnSchema: z.ZodType<Prisma.SaleReturnUpdateManyAndReturnArgs> = z.object({ select: SaleReturnSelectObjectSchema.optional(), data: SaleReturnUpdateManyMutationInputObjectSchema, where: SaleReturnWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyAndReturnArgs>;

export const SaleReturnUpdateManyAndReturnZodSchema = z.object({ select: SaleReturnSelectObjectSchema.optional(), data: SaleReturnUpdateManyMutationInputObjectSchema, where: SaleReturnWhereInputObjectSchema.optional() }).strict();