import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductHomeComponent } from './product-home/product-home.component';


@NgModule({
  declarations: [ProductHomeComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    OntimizeWebModule
  ]
})
export class ProductModule { }
