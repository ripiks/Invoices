import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/shared';
import { DataService } from 'src/app/features/shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  editingMode: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let idForEdit = this.route.snapshot.paramMap.get('id');

    if (idForEdit) {
      this.product = this.dataService.getProduct(parseInt(idForEdit));
      this.editingMode = true;
    } else {
      this.product = {
        id: this.dataService.getNextId(),
        name: null,
        price: null,
        category: null,
      };
      this.editingMode = false;
    }
  }

  onSubmit(product: Product) {
    this.dataService.updateProduct(product);
    if (this.editingMode === true) {
      this.router.navigate(['/product', 'list']);
    } else {
      this.router.navigate(['/product', 'detail', product.id]);
    }
  }
}
