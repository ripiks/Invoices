import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/features';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer;

  constructor() {}

  ngOnInit(): void {}
}
