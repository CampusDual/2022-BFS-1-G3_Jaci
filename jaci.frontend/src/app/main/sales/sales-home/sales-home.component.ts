import { Component, OnInit } from '@angular/core';

import { FilterExpressionUtils, Expression } from 'ontimize-web-ngx';

@Component({
   selector: 'app-sales-home',
   templateUrl: './sales-home.component.html',
   styleUrls: ['./sales-home.component.css']
})
export class SalesHomeComponent implements OnInit {


   constructor() { }

   ngOnInit() {
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

