import { describe, expect, it } from 'vitest';
import { CreateSaleSchema } from '../src/modules/sales/schemas/sale.schemas';

describe('sales schema validation', () => {
  it('accepts decimal quantity edge case 0.5', () => {
    const parsed = CreateSaleSchema.parse({
      warehouseId: '11111111-1111-4111-8111-111111111111',
      paymentMethod: 'CASH',
      amountPaid: '0',
      items: [
        {
          productVariantId: '22222222-2222-4222-8222-222222222222',
          quantity: '0.5',
          unitPrice: '12.50',
        },
      ],
    });

    expect(parsed.items[0]?.quantity).toBe('0.5');
  });

  it('rejects quantities below 0.5', () => {
    expect(() =>
      CreateSaleSchema.parse({
        warehouseId: '11111111-1111-4111-8111-111111111111',
        paymentMethod: 'CASH',
        amountPaid: '0',
        items: [
          {
            productVariantId: '22222222-2222-4222-8222-222222222222',
            quantity: '0.25',
            unitPrice: '12.50',
          },
        ],
      })
    ).toThrow('Quantity must be between 0.5 and 9999');
  });
});
