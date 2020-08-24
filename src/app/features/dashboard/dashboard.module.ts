import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-rounting.module';
import { CONTAINERS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  exports: [],
  declarations: [
    CONTAINERS
  ],
  providers: [],
})
export class DashBoardModule { }
