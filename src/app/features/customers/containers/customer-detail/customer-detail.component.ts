import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/features/shared';
import { DataService } from 'src/app/features/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customer = this.dataService.getCustomer(
      parseInt(this.route.snapshot.paramMap.get('id'))
    );
  }

  onSubmit(customer: Customer) {
    console.log(customer);
    this.dataService.updateCustomer(customer);
  }
}
