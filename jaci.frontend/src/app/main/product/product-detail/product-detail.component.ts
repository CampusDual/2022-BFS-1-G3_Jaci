import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  ngAfterViewChecked(){
    if(this.form.getFieldValue("on_sale") == true){
      this.toggle.checked = true;
    }
    else{
      this.toggle.checked = false;
    }
  }

  openProductChart(){
    this.router.navigateByUrl('main/products/charts');
  }

  setSale(){
    if(this.form.getFieldValue("on_sale") == true){
      this.form.setFieldValue("on_sale", false);
    }
    else{
      this.form.setFieldValue("on_sale", true);
    }
    this.form.update();
  }

}
