import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FilterExpressionUtils, Expression, OTableComponent, DialogService } from 'ontimize-web-ngx';

@Component({
   selector: 'app-sales-home',
   templateUrl: './sales-home.component.html',
   styleUrls: ['./sales-home.component.css']
})
export class SalesHomeComponent implements OnInit {

   @ViewChild('salesTable', { static: false }) table: OTableComponent;
   protected dialogService: DialogService;
   
   constructor(private router: Router) { }

   ngOnInit() { }

   salesByClientClic(){
      let selected = this.table.getSelectedItems();
      if(selected.length === 1){
         let clientId = selected[0]['CLIENT_ID'];
         this.router.navigate(['main/sales/client/'+clientId]);
      }
      else{
         if (this.dialogService) {
            this.dialogService.alert('OJO!','Primero debes de seleccionar un cliente.');
         }
      }
   }

   createFilter(values: Array<{ attr, value }>): Expression {
      let filters: Array<Expression> = [];
      values.forEach(fil => {
         if (fil.value) {
            if (fil.attr === 'STARTDATE_I') {
               filters.push(FilterExpressionUtils.buildExpressionMoreEqual('DATE', fil.value));
            }
            if (fil.attr === 'STARTDATE_E') {
               filters.push(FilterExpressionUtils.buildExpressionLessEqual('DATE', fil.value));
            }
         }
      });

      if (filters.length > 0) {
         return filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
      } else {
         return null;
      }
   }
}

