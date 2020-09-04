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
    component: fromPages.InvoicesComponent,
  },
  {
    path: 'detail/:invoiceNumber',
    component: fromPages.InvoiceDetailComponent,
  },
  {
    path: 'create',
    component: fromPages.InvoiceDetailComponent,
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class InvoiceRoutingModule {}
