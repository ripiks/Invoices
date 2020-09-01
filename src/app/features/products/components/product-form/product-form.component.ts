import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/features';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;

  @Output() submited: EventEmitter<Product> = new EventEmitter();

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    this.productForm.patchValue(this.product);
  }

  onSubmit() {
    this.submited.emit(this.productForm.value);
  }
}
