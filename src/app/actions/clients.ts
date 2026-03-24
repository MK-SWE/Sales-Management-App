'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { recordClientPayment } from '@/modules/sales/services/payments.service';
import { CreatePaymentSchema } from '@/modules/sales/schemas/payment.schemas';
import { DomainError } from '@/modules/sales/domain/errors';
import { z } from 'zod';
import { prisma } from '@/src/infrastructure/db/prisma';

type ClientListItem = {
  id: string;
  name: string;
  code: string;
  currentBalance: { toString(): string };
  isOpenAccountEnabled: boolean;
};

export async function createPaymentAction(formData: FormData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session || !session.user || !session.user.id) {
      return { success: false, error: "Unauthorized. Please log in." };
    }
    const userId = session.user.id;

    const payloadString = formData.get('payload');
    if (!payloadString || typeof payloadString !== 'string') {
      return { success: false, error: "Missing form payload" };
    }
    const rawData = JSON.parse(payloadString);
    
    const parsedData = CreatePaymentSchema.parse(rawData);
    
    const payment = await recordClientPayment(parsedData, userId) as {
      id: string;
      paymentNumber: string;
    };
    
    const client = await prisma.client.findUnique({ where: { id: parsedData.clientId } });

    return { 
      success: true, 
      data: {
        paymentId: payment.id,
        paymentNumber: payment.paymentNumber,
        newBalance: client?.currentBalance.toString()
      } 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed", details: error.issues };
    }
    if (error instanceof DomainError) {
      return { success: false, error: error.message };
    }
    console.error('Payment error:', error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function getClientsAction() {
  try {
    const clients = await prisma.client.findMany({
      where: { isBlocked: false },
      orderBy: { name: 'asc' }
    }) as ClientListItem[];
    return clients.map((c: ClientListItem) => ({
      id: c.id,
      name: c.name,
      code: c.code,
      currentBalance: c.currentBalance.toString(),
      isOpenAccountEnabled: c.isOpenAccountEnabled
    }));
  } catch (error) {
    console.error('Get clients error:', error);
    return [];
  }
}
