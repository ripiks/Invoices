import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/features/shared';
import { DataService } from 'src/app/features/shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  editingMode: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit(): void {
    let idForEdit = this.route.snapshot.paramMap.get('id');

    if (idForEdit) {
      this.customer = this.dataService.getCustomer(parseInt(idForEdit));
      this.editingMode = true;
    } else {
      this.customer = {
        id: this.dataService.getNextId(),
        name: null,
        address: null,
        phone: null,
        ico: null,
        dic: null,
      };
      this.editingMode = false;
    }
  }

  onSubmit(customer: Customer) {
    this.dataService.updateCustomer(customer);
    if(this.editingMode == true){
      this.router.navigate(['/customers', 'list'])
    }
    else{
      this.router.navigate(['/customers', 'detail', customer.id])
    }
  }
}
