import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
