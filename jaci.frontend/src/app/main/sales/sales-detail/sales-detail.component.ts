import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css']
})
export class SalesDetailComponent implements OnInit {

  @ViewChild('form', { static: false }) salesform: OFormComponent;
  entity="product";
  constructor() { }

  ngOnInit() {
  }

  calculateTotal(){
    let num1 = this.salesform.getFieldValue("price");
    let num2 = this.salesform.getFieldValue("quantity");
    if(num1 > 0 && num2 > 0){
      this.salesform.setFieldValue("total", num1*num2);
    }else{
      this.salesform.setFieldValue("total", 0);
    }
  }

}
