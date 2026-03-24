import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  createBaseState,
  decimal,
  DocumentType,
  getMockState,
  LedgerEntryType,
  MovementType,
  PaymentMethod,
  prismaMock,
  resetMockState,
  uuid,
} from './helpers/mock-prisma';

vi.mock('../src/infrastructure/db/prisma', async () => {
  const { Prisma } = await import('@prisma/client');
  const { Decimal, PrismaClientKnownRequestError } = await import('@prisma/client/runtime/library');
  const mock = await import('./helpers/mock-prisma');

  return {
    prisma: mock.prismaMock,
    db: mock.prismaMock,
    Prisma,
    Decimal,
    PrismaClientKnownRequestError,
    PaymentMethod: mock.PaymentMethod,
    PaymentStatus: mock.PaymentStatus,
    SaleStatus: mock.SaleStatus,
    ReturnStatus: mock.ReturnStatus,
    TransferStatus: mock.TransferStatus,
    MovementType: mock.MovementType,
    LedgerEntryType: mock.LedgerEntryType,
    DocumentType: mock.DocumentType,
  };
});

import { CreditLimitExceededError, InsufficientStockError, InvalidClientError, ValidationError } from '../src/modules/sales/domain/errors';
import { recordClientPayment } from '../src/modules/sales/services/payments.service';
import { getMonthlyClientBalanceReport } from '../src/modules/sales/services/reports.service';
import { recordSaleReturn } from '../src/modules/sales/services/returns.service';
import { recordSale } from '../src/modules/sales/services/sales.service';
import { recordInventoryTransfer } from '../src/modules/sales/services/transfers.service';

const userId = uuid(900);

describe('sales domain services', () => {
  beforeEach(() => {
    resetMockState();
    vi.restoreAllMocks();
  });

  it('records a cash sale successfully', async () => {
    vi.spyOn(Date, 'now').mockReturnValue(1_700_000_000_001);

    const result = await recordSale(
      {
        warehouseId: uuid(401),
        cashClientName: 'Walk In',
        paymentMethod: PaymentMethod.CASH,
        amountPaid: '18.75',
        notes: 'cash sale',
        items: [
          {
            productVariantId: uuid(301),
            quantity: '1.500',
            unitPrice: '12.50',
          },
        ],
      },
      userId
    );

    expect(result.saleNumber).toBe('SAL-1700000000001');
    expect(result.amountDue.toString()).toBe('0');
    expect(getMockState().warehouseStocks.find((entry) => entry.id === uuid(601))?.quantity.toString()).toBe('8.5');
    expect(getMockState().inventoryMovements).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: MovementType.SALE,
          referenceType: DocumentType.SALE,
          quantity: decimal('1.500'),
        }),
      ])
    );
    expect(getMockState().clientLedgerEntries).toHaveLength(0);
  });

  it('records an open account sale successfully', async () => {
    const result = await recordSale(
      {
        warehouseId: uuid(401),
        clientId: uuid(501),
        paymentMethod: PaymentMethod.OPEN_ACCOUNT,
        amountPaid: '0',
        notes: 'open account sale',
        items: [
          {
            productVariantId: uuid(302),
            quantity: '0.500',
            unitPrice: '25.00',
          },
        ],
      },
      userId
    );

    expect(result.amountDue.toString()).toBe('12.5');
    expect(getMockState().clients.find((entry) => entry.id === uuid(501))?.currentBalance.toString()).toBe('12.5');
    expect(getMockState().clientLedgerEntries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          clientId: uuid(501),
          type: LedgerEntryType.SALE_CHARGE,
          amount: decimal('12.50'),
          balanceAfter: decimal('12.50'),
        }),
      ])
    );
  });

  it('rejects open account sale when client is not open-account enabled', async () => {
    await expect(
      recordSale(
        {
          warehouseId: uuid(401),
          clientId: uuid(503),
          paymentMethod: PaymentMethod.OPEN_ACCOUNT,
          amountPaid: '0',
          items: [
            {
              productVariantId: uuid(301),
              quantity: '0.500',
              unitPrice: '12.50',
            },
          ],
        },
        userId
      )
    ).rejects.toBeInstanceOf(InvalidClientError);
  });

  it('rejects blocked clients for open account sales', async () => {
    await expect(
      recordSale(
        {
          warehouseId: uuid(401),
          clientId: uuid(502),
          paymentMethod: PaymentMethod.OPEN_ACCOUNT,
          amountPaid: '0',
          items: [
            {
              productVariantId: uuid(301),
              quantity: '0.500',
              unitPrice: '12.50',
            },
          ],
        },
        userId
      )
    ).rejects.toBeInstanceOf(InvalidClientError);
  });

  it('rejects sales that exceed the client credit limit', async () => {
    await expect(
      recordSale(
        {
          warehouseId: uuid(401),
          clientId: uuid(504),
          paymentMethod: PaymentMethod.OPEN_ACCOUNT,
          amountPaid: '0',
          items: [
            {
              productVariantId: uuid(301),
              quantity: '1.000',
              unitPrice: '12.50',
            },
          ],
        },
        userId
      )
    ).rejects.toBeInstanceOf(CreditLimitExceededError);
  });

  it('rejects transfers when source stock is insufficient', async () => {
    const state = createBaseState();
    state.warehouseStocks.find((entry) => entry.id === uuid(603))!.quantity = decimal('0.500');
    resetMockState(state);

    await expect(
      recordInventoryTransfer(
        {
          fromWarehouseId: uuid(402),
          toWarehouseId: uuid(401),
          items: [
            {
              productVariantId: uuid(301),
              quantity: '1.000',
            },
          ],
        },
        userId
      )
    ).rejects.toBeInstanceOf(InsufficientStockError);
  });

  it('increases warehouse stock after a sale return', async () => {
    const result = await recordSaleReturn(
      {
        warehouseId: uuid(401),
        clientId: uuid(501),
        items: [
          {
            productVariantId: uuid(301),
            quantity: '0.500',
            refundPrice: '12.50',
          },
        ],
      },
      userId
    );

    expect(result.grandTotal.toString()).toBe('6.25');
    expect(getMockState().warehouseStocks.find((entry) => entry.id === uuid(601))?.quantity.toString()).toBe('10.5');
    expect(getMockState().inventoryMovements).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: MovementType.RETURN,
          referenceType: DocumentType.RETURN,
        }),
      ])
    );
  });

  it('reduces currentBalance after a client payment', async () => {
    const state = createBaseState();
    state.clients.find((entry) => entry.id === uuid(501))!.currentBalance = decimal('20.00');
    resetMockState(state);

    const payment = await recordClientPayment(
      {
        clientId: uuid(501),
        amount: '7.50',
        paymentDate: new Date('2026-03-15T10:00:00.000Z').toISOString(),
        notes: 'partial payment',
      },
      userId
    );

    expect(payment.amount.toString()).toBe('7.5');
    expect(getMockState().clients.find((entry) => entry.id === uuid(501))?.currentBalance.toString()).toBe('12.5');
    expect(getMockState().clientLedgerEntries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: LedgerEntryType.PAYMENT_RECEIPT,
          amount: decimal('7.50'),
          balanceAfter: decimal('12.50'),
        }),
      ])
    );
  });

  it('builds the monthly client balance report correctly', async () => {
    const state = createBaseState();
    state.clientLedgerEntries = [
      {
        id: uuid(701),
        clientId: uuid(501),
        type: LedgerEntryType.SALE_CHARGE,
        amount: decimal('20.00'),
        balanceAfter: decimal('20.00'),
        happenedAt: new Date('2026-02-20T09:00:00.000Z'),
      },
      {
        id: uuid(702),
        clientId: uuid(501),
        type: LedgerEntryType.SALE_CHARGE,
        amount: decimal('10.00'),
        balanceAfter: decimal('30.00'),
        happenedAt: new Date('2026-03-05T09:00:00.000Z'),
      },
      {
        id: uuid(703),
        clientId: uuid(501),
        type: LedgerEntryType.PAYMENT_RECEIPT,
        amount: decimal('4.00'),
        balanceAfter: decimal('26.00'),
        happenedAt: new Date('2026-03-07T09:00:00.000Z'),
      },
      {
        id: uuid(704),
        clientId: uuid(501),
        type: LedgerEntryType.RETURN_CREDIT,
        amount: decimal('1.50'),
        balanceAfter: decimal('24.50'),
        happenedAt: new Date('2026-03-10T09:00:00.000Z'),
      },
    ];
    resetMockState(state);

    const report = await getMonthlyClientBalanceReport(2026, 3);

    expect(report).toEqual([
      expect.objectContaining({
        clientId: uuid(501),
        openingBalance: '20',
        charges: '10',
        credits: '5.5',
        closingBalance: '24.5',
      }),
    ]);
  });

  it('rejects client payment overpayment', async () => {
    await expect(
      recordClientPayment(
        {
          clientId: uuid(501),
          amount: '999.99',
          paymentDate: new Date('2026-03-15T10:00:00.000Z').toISOString(),
        },
        userId
      )
    ).rejects.toBeInstanceOf(ValidationError);
  });
});
