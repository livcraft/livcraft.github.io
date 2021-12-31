import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FunRoutingModule } from './fun-routing.module';
import { FunComponent } from './fun.component';

@NgModule({
  declarations: [
    FunComponent
  ],
  imports: [
    BrowserModule,
    FunRoutingModule
  ],
  providers: [],
  bootstrap: [FunComponent]
})
export class FunModule { }