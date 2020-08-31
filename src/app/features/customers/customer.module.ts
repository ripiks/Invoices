import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CustomerModule { }
