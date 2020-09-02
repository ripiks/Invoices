import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from 'src/app/features';
import {
  FormGroup,
  FormControl,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  @Input() invoice: Invoice;
  @Output() submited: EventEmitter<Invoice> = new EventEmitter();

  invoiceForm = new FormGroup({
    invoiceNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    createdAt: new FormControl('', [Validators.required]),
    paydate: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    totalPrice: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    status: new FormControl('', [Validators.required]),
    products: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    this.invoiceForm.patchValue(this.invoice);
  }

  onSubmit() {
    this.submited.emit(this.invoiceForm.value);
  }
}
