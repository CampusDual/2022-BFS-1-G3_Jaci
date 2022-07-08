import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { HomeComponent } from '../main/home/home.component';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
