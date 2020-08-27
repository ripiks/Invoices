import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from 'src/app/features/models';

@Component({
  selector: 'app-invoice-row',
  templateUrl: './invoice-row.component.html',
  styleUrls: ['./invoice-row.component.css'],
})
export class InvoiceRowComponent implements OnInit {
  @Input() invoice: Invoice;
  constructor() {}

  ngOnInit(): void {}
}
