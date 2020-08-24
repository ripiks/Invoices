import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRountingModule } from './customer-routing.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    CommonModule,
    CustomerRountingModule
  ]
})
export class CustomerModule { }
