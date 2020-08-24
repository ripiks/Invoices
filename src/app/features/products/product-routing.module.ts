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
    component: fromPages.ProductsComponent,
  },
  {
    path: 'detail',
    component: fromPages.ProductDetailComponent,
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ProductRoutingModule {}
