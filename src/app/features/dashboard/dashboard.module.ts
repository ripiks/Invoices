import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRountingModule } from './dashboard-rounting.module';
import { CONTAINERS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRountingModule
  ],
  exports: [],
  declarations: [
    CONTAINERS
  ],
  providers: [],
})
export class DashBoardModule { }
