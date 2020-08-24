import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Customers/customer/customer.component';
import { CustomerDetailComponent } from './Customers/customer-detail/customer-detail.component';
import { InvoicesComponent } from './Invoices/invoice/invoices.component';
import { InvoiceDetailComponent } from './Invoices/invoice-detail/invoice-detail.component';
import { ProductsComponent } from './Products/products/products.component';
import { ProductDetailComponent } from './Products/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
    InvoicesComponent,
    InvoiceDetailComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
