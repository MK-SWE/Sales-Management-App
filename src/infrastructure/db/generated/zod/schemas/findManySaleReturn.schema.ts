import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnIncludeObjectSchema as SaleReturnIncludeObjectSchema } from './objects/SaleReturnInclude.schema';
import { SaleReturnOrderByWithRelationInputObjectSchema as SaleReturnOrderByWithRelationInputObjectSchema } from './objects/SaleReturnOrderByWithRelationInput.schema';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './objects/SaleReturnWhereInput.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './objects/SaleReturnWhereUniqueInput.schema';
import { SaleReturnScalarFieldEnumSchema } from './enums/SaleReturnScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SaleReturnFindManySelectSchema: z.ZodType<Prisma.SaleReturnSelect> = z.object({
    id: z.boolean().optional(),
    returnNumber: z.boolean().optional(),
    originalSaleId: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    status: z.boolean().optional(),
    subtotal: z.boolean().optional(),
    grandTotal: z.boolean().optional(),
    notes: z.boolean().optional(),
    returnedAt: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    originalSale: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SaleReturnSelect>;

export const SaleReturnFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    returnNumber: z.boolean().optional(),
    originalSaleId: z.boolean().optional(),
    warehouseId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    status: z.boolean().optional(),
    subtotal: z.boolean().optional(),
    grandTotal: z.boolean().optional(),
    notes: z.boolean().optional(),
    returnedAt: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    originalSale: z.boolean().optional(),
    warehouse: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SaleReturnFindManySchema: z.ZodType<Prisma.SaleReturnFindManyArgs> = z.object({ select: SaleReturnFindManySelectSchema.optional(), include: z.lazy(() => SaleReturnIncludeObjectSchema.optional()), orderBy: z.union([SaleReturnOrderByWithRelationInputObjectSchema, SaleReturnOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnWhereInputObjectSchema.optional(), cursor: SaleReturnWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleReturnScalarFieldEnumSchema, SaleReturnScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnFindManyArgs>;

export const SaleReturnFindManyZodSchema = z.object({ select: SaleReturnFindManySelectSchema.optional(), include: z.lazy(() => SaleReturnIncludeObjectSchema.optional()), orderBy: z.union([SaleReturnOrderByWithRelationInputObjectSchema, SaleReturnOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnWhereInputObjectSchema.optional(), cursor: SaleReturnWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaleReturnScalarFieldEnumSchema, SaleReturnScalarFieldEnumSchema.array()]).optional() }).strict();