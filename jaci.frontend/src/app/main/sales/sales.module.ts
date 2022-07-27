import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesHomeComponent } from './sales-home/sales-home.component';
import { SalesClientComponent } from './sales-client/sales-client.component';
import { SalesNewComponent } from './sales-new/sales-new.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesChartsComponent } from './sales-charts/sales-charts.component';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  declarations: [
    SalesHomeComponent,
    SalesNewComponent,
    SalesDetailComponent,
    SalesChartsComponent],

  imports: [
    CommonModule,
    OntimizeWebModule,
    SalesRoutingModule,
    OChartModule
  ]
})
export class SalesModule { }


