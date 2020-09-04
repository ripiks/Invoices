import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from 'src/app/features';
import {
  FormGroup,
  FormControl,
  RequiredValidator,
  Validators,
  FormArray,
} from '@angular/forms';
import { Customer } from 'src/app/features/shared';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  @Input() invoice: Invoice;
  @Input() customers: Customer[];
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
    products: new FormArray([]),
  });

  getNewFormgroupForProduct() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  constructor() {}

  ngOnInit(): void {
    if(this.invoice && this.invoice.products){
      for(let i = 0 ; i < this.invoice.products.length; i++){
        this.addAlias();
      }
    }
    this.invoiceForm.patchValue(this.invoice);
  }

  onSubmit() {
    this.submited.emit(this.invoiceForm.value);
  }

  get products() {
    return this.invoiceForm.get('products') as FormArray;
  }

  addAlias() {
    this.products.push(this.getNewFormgroupForProduct());
  }
}
