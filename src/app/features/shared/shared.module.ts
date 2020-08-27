import { NgModule } from '@angular/core';
import { PROVIDERS } from './services';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [...PROVIDERS],
})
export class SharedModule { }
