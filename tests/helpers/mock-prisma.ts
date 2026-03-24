import { Decimal } from '@prisma/client/runtime/library';

export const PaymentMethod = {
  CASH: 'CASH',
  OPEN_ACCOUNT: 'OPEN_ACCOUNT',
} as const;

export const PaymentStatus = {
  UNPAID: 'UNPAID',
  PARTIAL: 'PARTIAL',
  PAID: 'PAID',
} as const;

export const SaleStatus = {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const ReturnStatus = {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const TransferStatus = {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const MovementType = {
  SALE: 'SALE',
  RETURN: 'RETURN',
  TRANSFER_IN: 'TRANSFER_IN',
  TRANSFER_OUT: 'TRANSFER_OUT',
  ADJUSTMENT: 'ADJUSTMENT',
} as const;

export const LedgerEntryType = {
  SALE_CHARGE: 'SALE_CHARGE',
  RETURN_CREDIT: 'RETURN_CREDIT',
  PAYMENT_RECEIPT: 'PAYMENT_RECEIPT',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
} as const;

export const DocumentType = {
  SALE: 'SALE',
  RETURN: 'RETURN',
  TRANSFER: 'TRANSFER',
  PAYMENT: 'PAYMENT',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
  MIGRATION: 'MIGRATION',
} as const;

type AnyRecord = Record<string, any>;

let sequence = 1;

function nextId(prefix: string) {
  const value = `${prefix}-${sequence}`;
  sequence += 1;
  return value;
}

export function decimal(value: string | number) {
  return new Decimal(value);
}

export function uuid(seed: number) {
  return `00000000-0000-0000-0000-${seed.toString().padStart(12, '0')}`;
}

export function createBaseState() {
  return {
    products: [
      {
        id: uuid(101),
        productName: 'Hammer Drill',
        brandId: uuid(201),
      },
      {
        id: uuid(102),
        productName: 'Circular Saw',
        brandId: uuid(202),
      },
    ],
    productVariants: [
      {
        id: uuid(301),
        productId: uuid(101),
        SKU: 'HAMMER-DRILL-01',
        price: decimal('12.50'),
        reorderStock: decimal('2.000'),
        isActive: true,
        attributes: { weight: '1.5kg' },
      },
      {
        id: uuid(302),
        productId: uuid(102),
        SKU: 'CIRCULAR-SAW-01',
        price: decimal('25.00'),
        reorderStock: decimal('1.000'),
        isActive: true,
        attributes: { blade: 'steel' },
      },
    ],
    warehouses: [
      { id: uuid(401), name: 'Main Warehouse', code: 'MAIN' },
      { id: uuid(402), name: 'Overflow Warehouse', code: 'OVERFLOW' },
    ],
    clients: [
      {
        id: uuid(501),
        name: 'Open Account Client',
        code: 'CLI-OPEN',
        isOpenAccountEnabled: true,
        isBlocked: false,
        creditLimit: decimal('100.00'),
        currentBalance: decimal('0.00'),
      },
      {
        id: uuid(502),
        name: 'Blocked Client',
        code: 'CLI-BLOCKED',
        isOpenAccountEnabled: true,
        isBlocked: true,
        creditLimit: decimal('100.00'),
        currentBalance: decimal('0.00'),
      },
      {
        id: uuid(503),
        name: 'Cash Only Client',
        code: 'CLI-CASH',
        isOpenAccountEnabled: false,
        isBlocked: false,
        creditLimit: decimal('100.00'),
        currentBalance: decimal('0.00'),
      },
      {
        id: uuid(504),
        name: 'Tight Credit Client',
        code: 'CLI-LIMIT',
        isOpenAccountEnabled: true,
        isBlocked: false,
        creditLimit: decimal('100.00'),
        currentBalance: decimal('95.00'),
      },
    ],
    warehouseStocks: [
      { id: uuid(601), warehouseId: uuid(401), variantId: uuid(301), quantity: decimal('10.000') },
      { id: uuid(602), warehouseId: uuid(401), variantId: uuid(302), quantity: decimal('5.000') },
      { id: uuid(603), warehouseId: uuid(402), variantId: uuid(301), quantity: decimal('1.000') },
    ],
    sales: [] as AnyRecord[],
    saleItems: [] as AnyRecord[],
    saleReturns: [] as AnyRecord[],
    saleReturnItems: [] as AnyRecord[],
    inventoryTransfers: [] as AnyRecord[],
    inventoryTransferItems: [] as AnyRecord[],
    inventoryMovements: [] as AnyRecord[],
    clientPayments: [] as AnyRecord[],
    clientLedgerEntries: [] as AnyRecord[],
  };
}

let state = createBaseState();

export function resetMockState(nextState = createBaseState()) {
  sequence = 1;
  state = nextState;
}

export function getMockState() {
  return state;
}

function cloneRecord<T extends AnyRecord>(record: T): T {
  return { ...record };
}

function sortByDateAsc<T extends AnyRecord>(items: T[], key: string) {
  return [...items].sort((left, right) => new Date(left[key]).getTime() - new Date(right[key]).getTime());
}

function sortByDateDesc<T extends AnyRecord>(items: T[], key: string) {
  return [...items].sort((left, right) => new Date(right[key]).getTime() - new Date(left[key]).getTime());
}

function buildVariant(variantId: string) {
  const variant = state.productVariants.find((entry) => entry.id === variantId);
  if (!variant) {
    return null;
  }

  const product = state.products.find((entry) => entry.id === variant.productId);
  return {
    ...cloneRecord(variant),
    product: product ? cloneRecord(product) : null,
  };
}

const tx = {
  productVariant: {
    async findUnique(args: AnyRecord) {
      const variant = state.productVariants.find((entry) => entry.id === args.where.id);
      if (!variant) {
        return null;
      }

      if (args.include?.product) {
        return buildVariant(variant.id);
      }

      return cloneRecord(variant);
    },
  },
  warehouseStock: {
    async findUnique(args: AnyRecord) {
      const key = args.where.warehouseId_variantId;
      const record = state.warehouseStocks.find(
        (entry) => entry.warehouseId === key.warehouseId && entry.variantId === key.variantId
      );

      return record ? cloneRecord(record) : null;
    },
    async update(args: AnyRecord) {
      const record = state.warehouseStocks.find((entry) => entry.id === args.where.id);
      if (!record) {
        throw new Error(`Warehouse stock ${args.where.id} not found`);
      }

      record.quantity = args.data.quantity;
      return cloneRecord(record);
    },
    async create(args: AnyRecord) {
      const record = {
        id: nextId('warehouse-stock'),
        ...args.data,
      };
      state.warehouseStocks.push(record);
      return cloneRecord(record);
    },
  },
  sale: {
    async create(args: AnyRecord) {
      const record = {
        id: nextId('sale'),
        createdAt: new Date(),
        updatedAt: new Date(),
        ...args.data,
      };
      state.sales.push(record);
      return cloneRecord(record);
    },
    async findMany(args: AnyRecord) {
      let records = [...state.sales];

      if (args?.where?.soldAt) {
        records = records.filter((entry) => {
          const soldAt = entry.soldAt ?? entry.createdAt;
          return soldAt >= args.where.soldAt.gte && soldAt <= args.where.soldAt.lte;
        });
      }

      records = args?.orderBy?.soldAt === 'desc' ? sortByDateDesc(records, 'soldAt') : records;

      return records.map((entry) => ({
        ...cloneRecord(entry),
        client: entry.clientId ? cloneRecord(state.clients.find((client) => client.id === entry.clientId)!) : null,
        warehouse: cloneRecord(state.warehouses.find((warehouse) => warehouse.id === entry.warehouseId)!),
      }));
    },
  },
  saleItem: {
    async create(args: AnyRecord) {
      const record = { id: nextId('sale-item'), ...args.data };
      state.saleItems.push(record);
      return cloneRecord(record);
    },
  },
  inventoryMovement: {
    async create(args: AnyRecord) {
      const record = { id: nextId('movement'), createdAt: new Date(), ...args.data };
      state.inventoryMovements.push(record);
      return cloneRecord(record);
    },
    async createMany(args: AnyRecord) {
      for (const item of args.data) {
        state.inventoryMovements.push({ id: nextId('movement'), createdAt: new Date(), ...item });
      }

      return { count: args.data.length };
    },
  },
  client: {
    async findUnique(args: AnyRecord) {
      const record = state.clients.find((entry) => entry.id === args.where.id);
      return record ? cloneRecord(record) : null;
    },
    async findUniqueOrThrow(args: AnyRecord) {
      const record = state.clients.find((entry) => entry.id === args.where.id);
      if (!record) {
        throw new Error(`Client ${args.where.id} not found`);
      }

      return cloneRecord(record);
    },
    async findMany(args?: AnyRecord) {
      let records = [...state.clients];

      if (args?.where?.isBlocked !== undefined) {
        records = records.filter((entry) => entry.isBlocked === args.where.isBlocked);
      }

      if (args?.orderBy?.name === 'asc') {
        records.sort((left, right) => left.name.localeCompare(right.name));
      }

      return records.map(cloneRecord);
    },
    async update(args: AnyRecord) {
      const record = state.clients.find((entry) => entry.id === args.where.id);
      if (!record) {
        throw new Error(`Client ${args.where.id} not found`);
      }

      Object.assign(record, args.data);
      return cloneRecord(record);
    },
  },
  clientLedgerEntry: {
    async create(args: AnyRecord) {
      const record = { id: nextId('ledger'), createdAt: new Date(), ...args.data };
      state.clientLedgerEntries.push(record);
      return cloneRecord(record);
    },
    async findFirst(args: AnyRecord) {
      const matching = state.clientLedgerEntries.filter((entry) => {
        if (args.where.clientId && entry.clientId !== args.where.clientId) {
          return false;
        }

        if (args.where.happenedAt?.lt && !(entry.happenedAt < args.where.happenedAt.lt)) {
          return false;
        }

        return true;
      });

      if (matching.length === 0) {
        return null;
      }

      const sorted = args.orderBy?.happenedAt === 'desc' ? sortByDateDesc(matching, 'happenedAt') : sortByDateAsc(matching, 'happenedAt');
      return cloneRecord(sorted[0]);
    },
    async findMany(args: AnyRecord) {
      let matching = [...state.clientLedgerEntries];

      if (args.where?.clientId) {
        matching = matching.filter((entry) => entry.clientId === args.where.clientId);
      }

      if (args.where?.happenedAt?.gte) {
        matching = matching.filter((entry) => entry.happenedAt >= args.where.happenedAt.gte);
      }

      if (args.where?.happenedAt?.lt) {
        matching = matching.filter((entry) => entry.happenedAt < args.where.happenedAt.lt);
      }

      const sorted = args.orderBy?.happenedAt === 'desc' ? sortByDateDesc(matching, 'happenedAt') : sortByDateAsc(matching, 'happenedAt');
      return sorted.map(cloneRecord);
    },
  },
  clientPayment: {
    async create(args: AnyRecord) {
      const record = { id: nextId('payment'), createdAt: new Date(), updatedAt: new Date(), ...args.data };
      state.clientPayments.push(record);
      return cloneRecord(record);
    },
    async findMany(args: AnyRecord) {
      let records = [...state.clientPayments];

      if (args.where?.paymentDate) {
        records = records.filter(
          (entry) => entry.paymentDate >= args.where.paymentDate.gte && entry.paymentDate <= args.where.paymentDate.lte
        );
      }

      records = args?.orderBy?.paymentDate === 'desc' ? sortByDateDesc(records, 'paymentDate') : records;

      return records.map((entry) => ({
        ...cloneRecord(entry),
        client: cloneRecord(state.clients.find((client) => client.id === entry.clientId)!),
      }));
    },
  },
  inventoryTransfer: {
    async create(args: AnyRecord) {
      const record = { id: nextId('transfer'), createdAt: new Date(), updatedAt: new Date(), ...args.data };
      state.inventoryTransfers.push(record);
      return cloneRecord(record);
    },
  },
  inventoryTransferItem: {
    async create(args: AnyRecord) {
      const record = { id: nextId('transfer-item'), ...args.data };
      state.inventoryTransferItems.push(record);
      return cloneRecord(record);
    },
  },
  saleReturn: {
    async create(args: AnyRecord) {
      const record = { id: nextId('sale-return'), createdAt: new Date(), updatedAt: new Date(), ...args.data };
      state.saleReturns.push(record);
      return cloneRecord(record);
    },
  },
  saleReturnItem: {
    async create(args: AnyRecord) {
      const record = { id: nextId('sale-return-item'), ...args.data };
      state.saleReturnItems.push(record);
      return cloneRecord(record);
    },
  },
};

export const prismaMock = {
  ...tx,
  async $transaction(operation: (client: typeof tx) => Promise<any>) {
    return operation(tx);
  },
};
