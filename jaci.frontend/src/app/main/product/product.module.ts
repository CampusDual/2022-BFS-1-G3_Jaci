import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';


@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductNewComponent,
    ProductDetailComponent
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    OntimizeWebModule
  ]
})
export class ProductModule { }
