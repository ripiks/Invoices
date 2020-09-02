import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/features';
import {
  FormGroup,
  FormControl,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer;

  @Output() submited: EventEmitter<Customer> = new EventEmitter();

  customerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      //Validators.min(9),
      Validators.pattern('^\\+[0-9]*$'),
      Validators.minLength(13),
    ]),
    ico: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
    ]),
    dic: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    this.customerForm.patchValue(this.customer);
  }

  onSubmit() {
    this.submited.emit(this.customerForm.value);
  }
}
