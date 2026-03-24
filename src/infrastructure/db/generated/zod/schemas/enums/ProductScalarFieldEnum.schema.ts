import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'productName', 'productFeatures', 'productDescription', 'productImages', 'productCadDrawing', 'productCatalogue', 'productVideos', 'childCategoryId', 'tags', 'createdAt', 'updatedAt', 'brandId'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;