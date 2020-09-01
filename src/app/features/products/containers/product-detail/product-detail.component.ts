import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/shared';
import { DataService } from 'src/app/features/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product = this.dataService.getProduct(
      parseInt(this.route.snapshot.paramMap.get('id'))
    );
  }

  onSubmit(product: Product) {
    this.dataService.updateProduct(product);
  }
}
