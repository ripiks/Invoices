import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor() {}

  ngOnInit() {
   
  }
}
