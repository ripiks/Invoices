import { Component, OnInit } from '@angular/core';
import { Invoice, Product, Customer } from 'src/app/features/models';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoice: Invoice[];
  product: Product[];
  customer: Customer;
  constructor() { }

  ngOnInit() {
    this.invoice =
     [{invoiceNumber: 111 , createdAt: 'vytvoreno:'  , customer: this.customer, totalPrice: 1000,
      status: 'odeslano', paydate: 'placeno', products: this.product }];
  }

}
