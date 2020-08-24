import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import * as fromPages from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: fromPages.CustomersComponent,
  },
  {
    path: 'detail/:id',
    component: fromPages.CustomerDetailComponent,
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CustomerRoutingModule {}
