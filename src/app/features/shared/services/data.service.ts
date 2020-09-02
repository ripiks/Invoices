import { Injectable } from '@angular/core';
import { Customer } from '../models/customers';
import { Product, Invoice } from '../models';
import * as moment from 'moment';
@Injectable({ providedIn: 'root' })
export class DataService {
  customers: Customer[];
  products: Product[];
  invoices: Invoice[];

  constructor() {
    this.customers = [
      { id: 1, name: 'ralba', address: 'praha', ico: 165, dic: 'cz1234' },
      { id: 2, name: 'ralba1', address: 'brno', ico: 168, dic: 'cz1786' },
      { id: 3, name: 'ralba2', address: 'usti nl', ico: 167, dic: 'cz1454' },
    ];

    this.products = [
      { id: 1, name: 'produkt1', price: '10', category: 'nářadí' },
      { id: 2, name: 'produkt2', price: '15', category: 'služby' },
      { id: 3, name: 'produkt3', price: '20', category: 'doplňky' },
    ];

    this.invoices = [
      {
        invoiceNumber: 111,
        createdAt: moment(),
        customer: this.customers[0],
        totalPrice: 1000,
        status: 'odeslano',
        paydate: moment().add(14, 'days'),
        products: [this.products[0], this.products[2]],
      },
      {
        invoiceNumber: 112,
        createdAt: moment(),
        customer: this.customers[0],
        totalPrice: 1000,
        status: 'odeslano',
        paydate: moment().add(14, 'days'),
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
    return this.customers.find((p) => p.id === id);
  }

  public getProduct(id: number): Product {
    return this.products.find((p) => p.id === id);
  }

  public getInvoice(invoiceNumber: number): Invoice {
    return this.invoices.find((p) => p.invoiceNumber === invoiceNumber);
  }

  public getNextId(){
    let max = 0;
    for (let i = 0; i < this.customers.length; i++) {
      if( max < this.customers[i].id)
       max = this.customers[i].id;
    }
    return max + 1 ;
  }

  public updateCustomer(customer: Customer) {
    let flag = true;
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === customer.id) {
        flag = false;
        this.customers[i] = customer;
      }
    }
    if (flag) {
      // create new
      this.customers.push(customer)
    }
  }

  public updateProduct(product: Product) {
    let flag = true;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        flag = false;
        this.products[i] = product;
      }
    }
    if (flag) {
      // vytvorit novy ?
    }
  }

  public updateInvoice(invoice: Invoice) {
    let flag = true;
    for (let i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].invoiceNumber === invoice.invoiceNumber) {
        flag = false;
        this.invoices[i] = invoice;
      }
    }
    if (flag) {
      // vytvor novou
    }
  }
}
