import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import * as fromPages from './containers';

export const routes: Routes = [
  {
    path: '',
    component: fromPages.DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
