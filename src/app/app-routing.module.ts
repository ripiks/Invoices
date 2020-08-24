import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((e) => e.DashBoardModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./features/customers/customer.module').then((e) => e.CustomerModule),
  },
   {
     path: 'invoice',
     loadChildren: () =>
       import('./features/invoices/invoice.module').then((e) => e.InvoiceModule),
   },

{
     path: 'product',
     loadChildren: () =>
       import('./features/products/product.module').then((e) => e.ProductModule),
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
