import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    ResumeRoutingModule
  ],
  providers: [],
  bootstrap: [ResumeComponent]
})
export class ResumeModule { }
