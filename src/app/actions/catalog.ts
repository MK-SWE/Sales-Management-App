'use server';

import { searchProductVariants } from '@/modules/sales/services/catalog.service';

export async function searchVariantsAction(query: string) {
  if (!query || query.length < 2) return [];
  
  try {
    const variants = await searchProductVariants(query);
    return variants.map(v => ({
      id: v.id,
      SKU: v.SKU,
      productName: v.product.productName,
      price: v.price.toString(),
      attributes: v.attributes,
    }));
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}
