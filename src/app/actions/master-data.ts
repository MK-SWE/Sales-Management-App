'use server';

import { prisma } from '@/infrastructure/db/prisma';
import { createWarehouse } from '@/modules/sales/services/warehouses.service';
import { createBrand } from '@/modules/sales/services/brands.service';
import { createClient } from '@/modules/sales/services/clients.service';
import { CreateClientSchema } from '@/modules/sales/schemas/client.schemas';
import { z } from 'zod';

export async function createWarehouseAction(data: { code: string; name: string; location?: string }) {
  try {
    const warehouse = await createWarehouse(data);
    return { success: true, data: warehouse };
  } catch (error) {
    console.error('Create warehouse error:', error);
    return { success: false, error: "Failed to create warehouse" };
  }
}

export async function createBrandAction(data: { name: string; description?: string }) {
  try {
    const brand = await createBrand(data);
    return { success: true, data: brand };
  } catch (error) {
    console.error('Create brand error:', error);
    return { success: false, error: "Failed to create brand" };
  }
}

export async function createClientAction(formData: FormData) {
  try {
    const payloadString = formData.get('payload');
    if (!payloadString || typeof payloadString !== 'string') {
      return { success: false, error: "Missing form payload" };
    }
    const rawData = JSON.parse(payloadString);
    
    const parsedData = CreateClientSchema.parse(rawData);
    const client = await createClient(parsedData);
    
    return { success: true, data: client };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed", details: error.errors };
    }
    console.error('Create client error:', error);
    return { success: false, error: "Failed to create client" };
  }
}

export async function getWarehousesAction() {
  try {
    return await prisma.warehouse.findMany({ where: { isActive: true }, orderBy: { name: 'asc' } });
  } catch (error) {
    console.error('Get warehouses error:', error);
    return [];
  }
}

export async function getBrandsAction() {
  try {
    return await prisma.brand.findMany({ orderBy: { name: 'asc' } });
  } catch (error) {
    console.error('Get brands error:', error);
    return [];
  }
}

export async function getProductsAction() {
  try {
    return await prisma.product.findMany({ orderBy: { productName: 'asc' } });
  } catch (error) {
    console.error('Get products error:', error);
    return [];
  }
}
