import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product: Product[];

  constructor() {}

  ngOnInit() {
    this.product = [
      { name: 'produkt1', price: '10', category: 'nářadí' },
      { name: 'produkt2', price: '15', category: 'služby' },
      { name: 'produkt3', price: '20', category: 'doplňky' },
    ];
  }
}
