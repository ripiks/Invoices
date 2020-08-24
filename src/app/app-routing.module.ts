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
  // {
  //   path: 'customers',
  //   loadChildren: () =>
  //     import('./features/customers/customer.module').then((e) => e.CustomerModule),
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
