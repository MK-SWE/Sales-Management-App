'use server';

import { searchProductVariants } from '@/modules/sales/services/catalog.service';

type SearchVariant = Awaited<ReturnType<typeof searchProductVariants>>[number];

export async function searchVariantsAction(query: string) {
  if (!query || query.length < 2) return [];
  
  try {
    const variants = await searchProductVariants(query);
    return variants.map((v: SearchVariant) => ({
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
