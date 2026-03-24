import * as z from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id', 'categoryName', 'parentCategoryId', 'tags', 'createdAt', 'updatedAt'])

export type CategoryScalarFieldEnum = z.infer<typeof CategoryScalarFieldEnumSchema>;