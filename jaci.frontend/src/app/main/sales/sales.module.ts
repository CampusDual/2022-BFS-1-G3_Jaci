import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesHomeComponent } from './sales-home/sales-home.component';
import { SalesChartsComponent } from './sales-charts/sales-charts.component';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [SalesHomeComponent, SalesChartsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SalesRoutingModule,
    OChartModule
  ]
})
export class SalesModule { }


