import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersHomeComponent } from './workers-home/workers-home.component';
import { WorkersDetailComponent } from './workers-detail/workers-detail.component';
import { WorkersNewComponent } from './workers-new/workers-new.component';


@NgModule({
  declarations: [WorkersHomeComponent,
     WorkersDetailComponent,
     WorkersNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    WorkersRoutingModule
  ]
})
export class WorkersModule { }
