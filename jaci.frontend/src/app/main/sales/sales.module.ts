import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesHomeComponent } from './sales-home/sales-home.component';
import { SalesClientComponent } from './sales-client/sales-client.component';


@NgModule({
  declarations: [SalesHomeComponent, SalesClientComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
