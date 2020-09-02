import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { ProductModule } from '../products';
import { CustomerModule } from '../customers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ProductModule,
    CustomerModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class InvoiceModule { }
