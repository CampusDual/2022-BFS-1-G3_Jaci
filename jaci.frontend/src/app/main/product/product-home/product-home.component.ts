import { Component, OnInit, ViewChild } from '@angular/core';
import { Expression, FilterExpressionUtils, OButtonToggleComponent, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  @ViewChild('table', { static: false }) table: OTableComponent;
  entity="product";
  
  constructor() {}

  ngOnInit() {
    
  }

  applyFilter(){
    this.entity = "lessProduct";
    this.table.refresh();
  }

  clearFilter(){
    this.entity = "product";
    this.table.refresh();
  }

}
