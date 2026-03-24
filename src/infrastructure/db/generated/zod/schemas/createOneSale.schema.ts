import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './objects/SaleInclude.schema';
import { SaleCreateInputObjectSchema as SaleCreateInputObjectSchema } from './objects/SaleCreateInput.schema';
import { SaleUncheckedCreateInputObjectSchema as SaleUncheckedCreateInputObjectSchema } from './objects/SaleUncheckedCreateInput.schema';

export const SaleCreateOneSchema: z.ZodType<Prisma.SaleCreateArgs> = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), data: z.union([SaleCreateInputObjectSchema, SaleUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SaleCreateArgs>;

export const SaleCreateOneZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), data: z.union([SaleCreateInputObjectSchema, SaleUncheckedCreateInputObjectSchema]) }).strict();