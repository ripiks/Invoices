import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features';
import { DataService } from 'src/app/features/shared/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }
}
