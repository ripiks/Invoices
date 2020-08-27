import { Component, OnInit } from '@angular/core';
import { Invoice, Product, Customer } from 'src/app/features';
import { DataService } from 'src/app/features/shared/services/data.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  invoice: Invoice[];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.invoice = this.dataService.getInvoices()
  }
}
