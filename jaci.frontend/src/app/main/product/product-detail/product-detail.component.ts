import { Component, OnInit, ViewChild } from '@angular/core';
import { OButtonToggleComponent, OFormComponent, OIntegerInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  host: {
    '[class.product-detail-form]': 'true'
  }
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('toggle', { static: false }) toggle: OButtonToggleComponent;
  @ViewChild('form', { static: false }) form: OFormComponent;

  constructor() {
    
  }

  ngOnInit() {
    
  }

  ngAfterViewChecked(){
    if(this.form.getFieldValue("ON_SALE") == true){
      this.toggle.checked = true;
    }
    else{
      this.toggle.checked = false;
    }
  }

  setSale(){
    if(this.form.getFieldValue("ON_SALE") == true){
      this.form.setFieldValue("ON_SALE", 0);
    }
    else{
      this.form.setFieldValue("ON_SALE", 1);
    }
    this.form.update();
  }

}
