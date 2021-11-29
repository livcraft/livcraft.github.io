import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    ProjectsRoutingModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule { }