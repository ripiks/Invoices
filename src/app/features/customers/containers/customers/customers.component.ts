import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/features/shared/services/data.service';
import { Customer } from 'src/app/features/shared/models/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }
}
