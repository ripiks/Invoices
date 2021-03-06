import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/features';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit(): void {}
}
