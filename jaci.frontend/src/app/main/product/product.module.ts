import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductNewComponent,
    ProductDetailComponent,
    ProductChartComponent
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    OntimizeWebModule,
    OChartModule
  ]
})
export class ProductModule { }
