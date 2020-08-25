import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/features/models';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

customers: Customer[];

  constructor() { }

  ngOnInit() {
    this.customers = [{name: 'ralba',  address: 'srgsg', ico: 165, dic: 'cz1234' },
    {name: 'ralba1',  address: 'srdgg', ico: 168, dic: 'cz1786' },
    {name: 'ralba2',  address: 'srweg', ico: 167, dic: 'cz1454' }];

}
}
