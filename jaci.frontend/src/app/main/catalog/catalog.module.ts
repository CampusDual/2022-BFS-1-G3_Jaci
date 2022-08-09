import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogHomeComponent } from './catalog-home/catalog-home.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [CatalogHomeComponent, CatalogDetailComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CatalogRoutingModule
  ],
  entryComponents:[
    CatalogDetailComponent
  ]
})
export class CatalogModule { }
