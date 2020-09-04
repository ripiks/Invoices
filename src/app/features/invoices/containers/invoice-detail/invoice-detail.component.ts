import { Component, OnInit } from '@angular/core';
import { Customer, Invoice } from 'src/app/features/shared';
import { DataService } from 'src/app/features/shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice;
  customers: Customer[];

  editingMode: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customers = this.dataService.getCustomers();

    let invoiceNumberForEdit = this.route.snapshot.paramMap.get(
      'invoiceNumber'
    );

    if (invoiceNumberForEdit) {
      this.invoice = this.dataService.getInvoice(
        parseInt(invoiceNumberForEdit)
      );
      this.editingMode = true;
    } else {
      this.invoice = {
        invoiceNumber: this.dataService.getNextInvoiceNumber(),
        createdAt: null,
        customerId: null,
        totalPrice: null,
        status: null,
        paydate: null,
        products: null,
      };
      this.editingMode = false;
    }
  }
  onSubmit(invoice: Invoice) {
    console.log(invoice);
    this.dataService.updateInvoice(invoice);
    if (this.editingMode === true) {
      this.router.navigate(['/invoices', 'list']);
    } else {
      this.router.navigate(['/invoices', 'detail', invoice.invoiceNumber]);
    }
  }
}
