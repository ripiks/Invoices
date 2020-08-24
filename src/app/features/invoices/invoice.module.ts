import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
