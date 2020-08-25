import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
