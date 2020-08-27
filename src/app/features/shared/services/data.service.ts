import { Injectable } from '@angular/core';
import { Customer } from '../models/customers';
import { Product, Invoice } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  customers: Customer[];
  products: Product[];
  invoices: Invoice[];

  constructor() {
    this.customers = [
      { id: 1,name: 'ralba', address: 'srgsg', ico: 165, dic: 'cz1234' },
      { id: 2,name: 'ralba1', address: 'srdgg', ico: 168, dic: 'cz1786' },
      { id: 3,name: 'ralba2', address: 'srweg', ico: 167, dic: 'cz1454' },
    ];

    this.products = [
      { name: 'produkt1', price: '10', category: 'nářadí' },
      { name: 'produkt2', price: '15', category: 'služby' },
      { name: 'produkt3', price: '20', category: 'doplňky' },
    ];

    this.invoices = [
      {
        invoiceNumber: 111,
        createdAt: 'vytvoreno:',
        customer: this.customers[0],
        totalPrice: 1000,
        status: 'odeslano',
        paydate: 'placeno',
        products: [this.products[0],this.products[2]],
      },
      {
        invoiceNumber: 112,
        createdAt: 'vytvoreno:',
        customer: this.customers[0],
        totalPrice: 1000,
        status: 'odeslano',
        paydate: 'placeno',
        products: [this.products[1]],
      },
    ];
  }

  public getCustomers() {
    return this.customers;
  }
  public getInvoices() {
    return this.invoices;
  }
  public getProducts() {
    return this.products;
  }

  public getCustomer(id: number): Customer {
    return this.customers.find(p => p.id == id);
  }
}
